import { createContext, useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { defaultChannel, validateMessage } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, iChannel, iChannelContext, iMessage, iUser } from '../types';
import { useUserContext } from './UserContext';
import { doc, getDoc, getDocs, setDoc, updateDoc, onSnapshot, collection } from '@firebase/firestore';
import { db } from '../firebaseConfig';

const ChannelContext = createContext<iChannelContext | Record<string, never>>({});
export const useChannelContext = () => useContext(ChannelContext);

function ChannelContextProvider({ children, ...props }: HTMLElementProps) {
	const [activeChannel, setActiveChannel] = useState<iChannel>(defaultChannel);
	const { activeUser } = useUserContext();

	const getChannel = async (channelId: string) => {
		const channelsDoc = await getDoc(doc(db, 'channels', channelId));

		if (!channelsDoc.exists()) {
			console.warn(`(Firestore): channel ${channelId} not found`);
			return undefined;
		}

		const channelData = channelsDoc.data() as iChannel;
		return channelData;
	};

	const getMembers = async (channelId: string = activeChannel.id) => {
		if (channelId === activeChannel.id)
			return activeChannel.members;
		const channel = collection(db, 'channels', channelId, 'members');
		const membersSnap = await getDocs(channel);
		const members = membersSnap.docs.map((doc) => doc.data() as iUser);
		return members;
	};

	const getMessages = async (channelId: string = activeChannel.id) => {
		if (channelId === activeChannel.id)
			return activeChannel.messages;
		const channel = await getChannel(channelId);
		const messages = channel?.messages as iMessage[] | undefined;
		return messages;
	};

	const createChannel = async (channel: iChannel) => {
		const channelsDoc = await getDoc(doc(db, 'channels', channel.id));

		if (channelsDoc.exists()) {
			console.warn(`(Firestore): channel ${channel.id} already exists`);
			return false;
		}

		const { members, ...channelInfo } = channel;
		await setDoc(doc(db, 'channels', channel.id), channelInfo);
		members.forEach(async (member) => {
			await setDoc(doc(db, 'channels', channel.id, 'members', member.id), member);
		});

		return channel;
	};

	const changeChannel = async (channelId: string) => {
		// TODO: Implement
		return defaultChannel;
	};

	const pushMessage = async (content: string) => {
		const validatedContent = validateMessage(content);

		const parsedMessage: iMessage = {
			id: v4(),
			authorName: activeUser.name,
			authorId: activeUser.id,
			channelId: activeChannel.id,
			content: validatedContent,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};

		const channel = await getChannel(activeChannel.id);

		if (channel) {
			channel.messages.push(parsedMessage);
			updateDoc(doc(db, 'channels', channel.id), {
				messages: channel.messages
			});
		} else {
			console.warn(`(Firestore): channel ${activeChannel.id} not found, creating...`);
			const newChannel = await createChannel({...activeChannel, messages: [parsedMessage]});
			newChannel && setActiveChannel(newChannel);
		}

		return parsedMessage;
	};

	useEffect(() => {
		const activeChannelUnsub = onSnapshot(doc(db, 'channels', activeChannel.id),
			(doc) => doc.exists() && setActiveChannel(doc.data() as iChannel)
		);

		return () => { activeChannelUnsub(); };
	}, [activeChannel.id]);

	return (
		<ChannelContext.Provider {...props} value={{
			activeChannel: activeChannel,
			setActiveChannel: setActiveChannel,
			getChannel: getChannel,
			getMembers: getMembers,
			getMessages: getMessages,
			createChannel: createChannel,
			changeChannel: changeChannel,
			pushMessage: pushMessage,
		}}>
			{children}
		</ChannelContext.Provider>
	);
}

export default ChannelContextProvider;
