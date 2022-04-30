import { getChannelDoc, getChannelRef, getChannelsRef, getMessagesDocs, getMessagesRef, parseChannel } from './ChannelContextHelper';
import { getDocs, setDoc, addDoc, updateDoc, onSnapshot, query, where, Unsubscribe } from '@firebase/firestore';
import { HTMLElementProps, iChannel, iChannelContext, iMessage, iOpenChannel } from '../types';
import { defaultChannel, defaultUser, validateMessage } from '../pages/Chat/ChatHelper';
import { createContext, useContext, useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import { v4 } from 'uuid';

const ChannelContext = createContext<iChannelContext | Record<string, never>>({});
export const useChannelContext = () => useContext(ChannelContext);

function ChannelContextProvider({ children, ...props }: HTMLElementProps) {
	const [ activeChannel, setActiveChannel ] = useState<iChannel>(defaultChannel);
	const [ openChannels, setOpenChannels ] = useState<iOpenChannel[]>([]);
	const [ loadingStack, setLoadingStack ] = useState<boolean[]>([]);
	const [ onMessageUnsub, setOnMessageUnsub ] = useState<Unsubscribe | undefined>();
	const { activeUser } = useUserContext();

	const getChannel = async (channelId: string) => {
		const channelsDoc = await getChannelDoc(channelId);

		if (!channelsDoc.exists()) {
			console.warn(`(Firestore): channel ${channelId} not found`);
			return undefined;
		}

		const messages = await getMessages(channelId);
		const channelData = parseChannel({
			...channelsDoc.data() as iChannel,
			messages: messages.sort((a, b) => a.createdAt - b.createdAt)
		});
		return channelData;
	};

	const getChannelByMembers = async (membersIds: string[]) => {
		const q = query(getChannelsRef(), where('membersIds', '==', membersIds.sort()));
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
		const docs = await getMessagesDocs(channelId);
		const messages = docs?.map(doc => doc.data()) as iMessage[];
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
		const newChannelDoc = await addDoc(getChannelsRef(), channel);
		channel.id = newChannelDoc.id;
		await setDoc(getChannelRef(channel.id), channel);
		return channel;
	};

	const changeChannel = async (channelId: string) => {
		const targetChannel = await getChannel(channelId);
		targetChannel && setActiveChannel(parseChannel(targetChannel));
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

		addDoc(getMessagesRef(activeChannel.id), parsedMessage);
		updateDoc(getChannelRef(activeChannel.id), { updatedAt: Date.now() });
		return parsedMessage;
	};

	const setLoading = (loading: boolean) => {
		if (loading)
			setLoadingStack([ ...loadingStack, true ]);
		else {
			const newLoadingStack = [ ...loadingStack ];
			newLoadingStack.pop();
			setLoadingStack(newLoadingStack);
		}
	};

	const isLoading = () => loadingStack.length > 0;

	// !TODO: Improve performance!
	// Listen to active channel changes
	useEffect(() => {
		if (onMessageUnsub)
			onMessageUnsub();

		const messageSnapUnsub = onSnapshot(getMessagesRef(activeChannel.id),
			(coll) => setActiveChannel(parseChannel({
				...activeChannel,
				messages: coll.docs.map(doc => doc.data() as iMessage)
					.sort((a, b) => a.createdAt - b.createdAt)
			}))
		);

		setOnMessageUnsub(() => messageSnapUnsub);
		return () => onMessageUnsub && onMessageUnsub();
	}, [activeChannel.id]);

	// Listen to open channels changes
	useEffect(() => {
		const q = query(getChannelsRef(), where('membersIds', 'array-contains', activeUser.id));
		const openChannelsUnsub = onSnapshot(q, (querySnap) => {
			const channels: iOpenChannel[] = querySnap.docs.map((doc) => ({
				id: doc.id,
				type: doc.data()?.type,
				label: doc.data()?.label,
				membersIds: doc.data()?.membersIds,
				updatedAt: doc.data()?.updatedAt,
			}));
			channels.sort((a, b) => b.updatedAt - a.updatedAt);
			setOpenChannels(channels);
		});
		return () => { openChannelsUnsub(); };
	}, [activeUser.id]);

	return (
		<ChannelContext.Provider {...props} value={{
			activeChannel: activeChannel,
			setActiveChannel: setActiveChannel,
			openChannels: openChannels,
			setOpenChannels: setOpenChannels,
			getChannel: getChannel,
			getChannelByMembers: getChannelByMembers,
			getMembersIds: getMembersIds,
			getMessages: getMessages,
			createDM: createDM,
			changeChannel: changeChannel,
			pushMessage: pushMessage,
			setLoading: setLoading,
			isLoading: isLoading,
		}}>
			{children}
		</ChannelContext.Provider>
	);
}

export default ChannelContextProvider;
