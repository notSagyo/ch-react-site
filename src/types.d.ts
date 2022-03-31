import { Icon } from 'tabler-icons-react';

export interface IUser {
	id: string,
	name: string,
	occupation: string,
	email: string,
	created: number,
	avatarURL: string,
	bannerURL: string,
}

export interface iChatContext {
	activeChannel: iChannel,
	setActiveChannel: (channel: iChannel) => void,
	getChannelById: (id: string) => iChannel,
	createChannel: (channel: iChannel) => iChannel,
	updateChannel: (channel: iChannel) => iChannel,
	getMessages: (channelId: string) => iMessage[],
	pushMessage: (message: iMessage, channel: iChannel) => iMessage
}

export interface iChannel {
	id: string,
	label: string,
	description: string,
	members: string[],
	messages: iMessage[],
	created: number,
	updated: number,
	type: 'user' | 'team'
}

export interface iMessage {
	id: string,
	content: string,
	channelId: string,
	userId: string,
	created: number
}

export interface iSidebarChannel extends iChannel {
	icon: Icon,
	avatarURL?: string
}
