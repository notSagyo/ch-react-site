import { SetStateAction } from 'react';
import { User } from '@firebase/auth';
import { Icon } from 'tabler-icons-react';

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLElementProps = React.HTMLProps<HTMLElement>;

export interface iUser {
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
	members: iUser[];
	messages: iMessage[];
	createdAt: number;
	updatedAt: number;
	type: 'user' | 'team';
}

export interface iMessage {
	id: string;
	content: string;
	channelId: string;
	authorId: string;
	authorName: string;
	createdAt: number;
	updatedAt: number;
}

export interface iProduct {
	id: string;
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

export interface iCartItem {
	id: string;
	name: string;
	price: number;
	category: string;
	quantity: number;
}

export interface iOrder {
	id?: string;
	userId: string;
	userName: string;
	userEmail: string;
	products: iCartItem[];
	total: number;
	createdAt: number;
}

export interface iSidebarChannel extends iChannel {
	icon: Icon;
	avatarURL?: string;
}

export interface iShopContext {
	getProduct: (id: string) => Promise<iProduct | undefined>;
	getProducts: () => Promise<iProduct[]>;
	getProductsByCategory: (category: string) => Promise<iProduct[] | undefined>;
	setProduct: (product: iProduct) => Promise<void>;
}

export interface iCartContext {
	itemList: iCartItem[];
	setItemList: React.Dispatch<SetStateAction<iCartItem[]>>;
	addItem: (product: iCartItem) => void;
	removeItem: (id: string) => void;
	getTotal: () => number;
	clearCart: () => void;
	createOrder: (order: iOrder)  => Promise<iOrder>;
	productToCartItem: (product: iProduct, quantity: number) => iCartItem;
}

export interface iUserContext {
	activeUser: iUser;
	setActiveUser: React.Dispatch<SetStateAction<iUser>>;
	authUser: User | undefined;
	setAuthUser: React.Dispatch<SetStateAction<User | undefined>>;
	getUser: (id: string) => Promise<iUser | undefined>;
	createUser: (user: iUser) => Promise<iUser | false>;
	updateUser: (user: iUser) => Promise<iUser>;
	signIn: () => Promise<User | undefined>;
	signOut: () => Promise<void>;
}

export interface iChannelContext {
	activeChannel: iChannel;
	setActiveChannel: React.Dispatch<SetStateAction<iChannel>>;
	getChannel: (id: string) => Promise<iChannel | undefined>;
	getMembers: (id?: string) => Promise<iUser[] | undefined>;
	getMessages: (id?: string) => Promise<iMessage[] | undefined>;
	createChannel: (channel: iChannel) => Promise<iChannel | false>;
	changeChannel: (id: string) => Promise<iChannel>;
	pushMessage: (content: string) => Promise<iMessage>;
}
