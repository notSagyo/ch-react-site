import { collection, getDocs, getDoc, setDoc, addDoc, doc } from '@firebase/firestore';
import { channelTypes, iChannel, iMessage } from '../types';
import { db } from '../firebaseConfig';

// Refs ======================================================================//
export const getMessagesRef = (channelId: string) =>
	collection(db, 'channels', channelId, 'messages');

export const getChannelsRef = () =>
	collection(db, 'channels');

export const getChannelRef = (channelId: string) =>
	doc(db, 'channels', channelId);

export const getChannelDoc = async (channelId: string ) =>
	getDoc(doc(db, 'channels', channelId));

// Helpers ===================================================================//
export const getMessagesDocs = async (channelId: string) => {
	const messagesRef = getMessagesRef(channelId);
	const messagesSnap = await getDocs(messagesRef);
	const messagesDocs = messagesSnap?.docs;
	return messagesDocs;
};

export const createChannel = async (channel: iChannel, forceId = false) => {
	if (!forceId) {
		const newChannelDoc = await addDoc(getChannelsRef(), channel);
		channel.id = newChannelDoc.id;
	}
	const { messages, ...channelData } = channel;
	await setDoc(getChannelRef(channel.id), channelData);
	return channel;
};

export const parseChannel = (channel: iChannel): iChannel => ({
	id: channel?.id as string || '',
	label: channel?.label as string || '',
	type: channel?.type as channelTypes || 'team',
	description: channel?.description as string || '',
	messages: channel?.messages as iMessage[] || [],
	membersIds: channel?.membersIds as string[] || [],
	createdAt: channel?.createdAt as number || Date.now(),
	updatedAt: channel?.updatedAt as number || Date.now(),
	photoUrl: channel?.photoUrl as string || undefined,
	bannerUrl: channel?.bannerUrl as string || undefined,
});
