import { createContext, useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { defaultChannel, defaultUser, validateMessage } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, iChannel, iChannelContext, iMessage } from '../types';
import { useUserContext } from './UserContext';
import { doc, getDoc, getDocs, setDoc, addDoc, updateDoc, onSnapshot, collection, query, where } from '@firebase/firestore';
import { db } from '../firebaseConfig';

const ChannelContext = createContext<iChannelContext | Record<string, never>>({});
export const useChannelContext = () => useContext(ChannelContext);

function ChannelContextProvider({ children, ...props }: HTMLElementProps) {
	const [ activeChannel, setActiveChannel ] = useState<iChannel>(defaultChannel);
	const [ openChannels, setOpenChannels ] = useState<iChannel[]>([]);
	const [ loading, setLoading ] = useState(false);
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

	const getChannelByMembers = async (membersIds: string[]) => {
		const q = query(collection(db, 'channels'), where('membersIds', '==', membersIds.sort()));
		const querySnap = await getDocs(q);
		const channel =  querySnap?.docs[0]?.data() as iChannel | undefined;
		if (!channel)
			console.warn(`(Firestore): channel with members ${membersIds} not found`);
		return channel;
	};

	const getMembersIds = async (channelId: string = activeChannel.id) => {
		if (channelId === activeChannel.id)
			return activeChannel.membersIds;
		const channel = await getChannel(channelId);
		const members = channel?.membersIds;
		return members;
	};

	const getMessages = async (channelId: string = activeChannel.id) => {
		if (channelId === activeChannel.id)
			return activeChannel.messages;
		const channel = await getChannel(channelId);
		const messages = channel?.messages as iMessage[] | undefined;
		return messages;
	};

	const createDM = async (channel: iChannel) => {
		if (channel.membersIds.includes(defaultUser.id))
			throw new Error('Can\'t start a conversation with a Guest user');

		const foundChannel = await getChannelByMembers(channel.membersIds);

		if (foundChannel) {
			console.warn('(Firestore): channel with same members already exists');
			return foundChannel;
		}

		channel.membersIds = channel.membersIds.sort();
		const newChannelDoc = await addDoc(collection(db, 'channels'), channel);
		channel.id = newChannelDoc.id;
		await setDoc(doc(db, 'channels', channel.id), channel);
		return channel;
	};

	const changeChannel = async (channelId: string) => {
		const targetChannel = await getChannel(channelId);
		targetChannel && setActiveChannel(targetChannel);
		return targetChannel;
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
				messages: channel.messages,
				updatedAt: Date.now(),
			});
		} else {
			console.warn(`(Firestore): channel ${activeChannel.id} not found, creating...`);
			const newChannel = await createDM({...activeChannel, messages: [parsedMessage]});
			newChannel && setActiveChannel(newChannel);
		}

		return parsedMessage;
	};

	// Listen to active channel changes
	useEffect(() => {
		const activeChannelUnsub = onSnapshot(doc(db, 'channels', activeChannel.id),
			(doc) => doc.exists() && setActiveChannel(doc.data() as iChannel)
		);
		return () => { activeChannelUnsub(); };
	}, [activeChannel.id]);

	// Listen to open channels changes
	useEffect(() => {
		const q = query(collection(db, 'channels'), where('membersIds', 'array-contains', activeUser.id));
		const openChannelsUnsub = onSnapshot(q, (querySnap) => {
			const channels = querySnap.docs.map((doc) => doc.data() as iChannel);
			channels.sort((a, b) => b.updatedAt - a.updatedAt);
			setOpenChannels(channels);
			console.log('Open channels:', channels);
		});
		return () => { openChannelsUnsub(); };
	}, [activeUser.id]);

	return (
		<ChannelContext.Provider {...props} value={{
			activeChannel: activeChannel,
			setActiveChannel: setActiveChannel,
			openChannels: openChannels,
			setOpenChannels: setOpenChannels,
			loading: loading,
			setLoading: setLoading,
			getChannel: getChannel,
			getChannelByMembers: getChannelByMembers,
			getMembersIds: getMembersIds,
			getMessages: getMessages,
			createDM: createDM,
			changeChannel: changeChannel,
			pushMessage: pushMessage,
		}}>
			{children}
		</ChannelContext.Provider>
	);
}

export default ChannelContextProvider;
