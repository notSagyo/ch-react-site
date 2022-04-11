import { Icon } from 'tabler-icons-react';

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface IUser {
	id: number,
	name: string,
	occupation: string,
	email: string,
	created: number,
	avatarURL: string,
	bannerURL: string,
}

export interface iChannel {
	id: string,
	label: string,
	description: string,
	members: number[],
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

export interface iProduct {
	id: number,
	name: string,
	description: string,
	price: number,
	category: string,
	features: iFeature[]
}

export interface iFeature {
	icon: Icon | string,
	name: string,
	description: string
}

export interface iSidebarChannel extends iChannel {
	icon: Icon,
	avatarURL?: string
}
