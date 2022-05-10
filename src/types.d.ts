import { SetStateAction } from 'react';
import { User } from '@firebase/auth';
import { Icon } from 'tabler-icons-react';

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLElementProps = React.HTMLProps<HTMLElement>;
export type channelTypes = 'user' | 'team';
export type sidenavIcons = 'User' | 'Users';

export interface iUser {
	id: string;
	name: string;
	occupation: string;
	email: string;
	createdAt: number;
	updatedAt: number;
	photoURL: string;
	bannerURL: string;
}

export interface iChannel {
	id: string;
	label: string;
	description: string;
	membersIds: string[];
	messages: iMessage[];
	createdAt: number;
	updatedAt: number;
	type: channelTypes;
	photoUrl?: string;
	bannerUrl?: string;
}

export interface iOpenChannel {
	id: string;
	label: string;
	type: 'user' | 'team';
	updatedAt: number;
	membersIds: string[];
	photoUrl?: string;
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
	photoURL?: string;
}

export interface iShopContext {
	getProduct: (id: string) => Promise<iProduct | undefined>;
	getProducts: () => Promise<iProduct[]>;
	getProductsByCategory: (category: string) => Promise<iProduct[] | undefined>;
	setProduct: (product: iProduct) => Promise<iProduct>;
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
	openChannels: iOpenChannel[];
	setOpenChannels: React.Dispatch<SetStateAction<iOpenChannel[]>>;
	getChannel: (id: string) => Promise<iChannel | undefined>;
	getChannelByMembers: (membersIds: string[]) => Promise<iChannel | undefined>;
	getMembersIds: (id?: string) => Promise<string[] | undefined>;
	getMessages: (id?: string) => Promise<iMessage[] | undefined>;
	createDM: (channel: iChannel) => Promise<iChannel>;
	createTeam: (channel: iChannel) => Promise<iChannel>;
	changeChannel: (id: string) => Promise<iChannel | undefined>;
	pushMessage: (content: string) => Promise<iMessage | undefined>;
	addMember: (channelId: string, memberId: string) => Promise<iChannel | undefined>;
	setLoading: (loading: boolean) => void;
	isLoading: () => boolean;
}
