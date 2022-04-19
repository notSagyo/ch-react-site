import { createContext, useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { defaultChannel, validateMessage } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, iChannel, iChannelContext, iMessage } from '../types';
import { useUserContext } from './UserContext';
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from '@firebase/firestore';
import { db } from '../firebaseConfig';
import { FirebaseError } from 'firebase/app';

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

	const getUsers = async (channelId: string) => {
		// TODO: Implement
		console.log('getUsers not implemented');
		return [];
	};

	const getMessages = async (channelId: string) => {
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

		await setDoc(doc(db, 'channels', channel.id), channel);
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

		activeChannel.messages.push(parsedMessage);
		await updateDoc(doc(db, 'channels', activeChannel.id), {
			messages: activeChannel.messages,
		}).catch((err: FirebaseError) => {
			if (err.code === 'not-found') {
				console.warn(`(Firestore): channel ${activeChannel.id} not found, creating...`);
				createChannel(activeChannel);
			}
		});

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
			getUsers: getUsers,
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
