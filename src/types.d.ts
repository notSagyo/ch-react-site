import { SetStateAction } from 'react';
import { Icon } from 'tabler-icons-react';

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLElementProps = React.HTMLProps<HTMLElement>;

export interface IUser {
	id: string;
	name: string;
	occupation: string;
	email: string;
	createdAt: number;
	updatedAt: number;
	avatarURL: string;
	bannerURL: string;
}

export interface iChannel {
	id: string;
	label: string;
	description: string;
	members: string[];
	messages: iMessage[];
	createdAt: number;
	updatedAt: number;
	type: 'user' | 'team';
}

export interface iMessage {
	id: string;
	content: string;
	channelId: string;
	userId: string;
	createdAt: number;
	updatedAt: number;
}

export interface iProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	category: string;
	features: iFeature[];
}

export interface iFeature {
	icon: Icon | string;
	name: string;
	description: string;
}

export interface iSidebarChannel extends iChannel {
	icon: Icon;
	avatarURL?: string;
}

export interface iCartItem extends iProduct {
	quantity: number;
}

export interface iCartContext {
	itemList: iCartItem[];
	setItemList: React.Dispatch<SetStateAction<iCartItem[]>>;
	addItem: (product: iCartItem) => void;
	removeItem: (id: number) => void;
	clearCart: () => void;
}

export interface iUserContext {
	activeUser: IUser;
	setActiveUser: React.Dispatch<SetStateAction<IUser>>;
	getUser: (id: string) => Promise<IUser>;
}

export interface iChannelContext {
	activeChannel: iChannel;
	setActiveChannel: React.Dispatch<SetStateAction<iChannel>>;
	getChannel: (id: string) => Promise<iChannel>;
	changeChannel: (id: string) => Promise<iChannel>;
	getUsers: (id: string) => Promise<IUser[]>;
	getMessages: (id: string) => Promise<iMessage[]>;
	pushMessage: (message: iMessage) => Promise<iMessage>;
}
