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
	created: number,
	updated: number,
	members: string[],
	messages: iMessage[],
	type: 'user' | 'team'
}

export interface iMessage {
	id: string,
	channelId: string,
	userId: string,
	content: string,
	created: number
}
