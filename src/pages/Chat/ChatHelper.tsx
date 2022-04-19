import { atom, useSetRecoilState } from 'recoil';
import { iChannel, iUser } from '../../types';
import usersJSON from '../../data/users.json';
import { getChannel } from '../../components/Channel/ChannelHelper';
import { isEmptyObject } from '../../utils';

// Constants =================================================================//
export const maxMessageLength = 200;

// Recoil declarations =======================================================//
export const CurrentUserState = atom<iUser>({
	key: 'CurrentUser',
	default: {
		createdAt: Date.now(),
		updatedAt: Date.now(),
		email: '',
		id: '-1',
		avatarURL: '',
		name: '',
		occupation: 'Frontend Deloper: JS / React',
		bannerURL: 'https://picsum.photos/600/300',
	},
});

// Functions =================================================================//
// Messages ==================================================================//
export const validateMessage = (content: string) => {
	content = content.trim();

	if (content.length < 1 	|| content.length > maxMessageLength) {
		throw Error('Message must be between 1 and 200 characters.');
	}

	return content;
};

// Users =====================================================================//
export function getUser(id: string): iUser | undefined {
	const user = usersJSON.find(user => user.id === id);
	return user;
}

// Defaults ==================================================================//
export const defaultUser: iUser = {
	createdAt: Date.now(),
	updatedAt: Date.now(),
	email: '',
	id: '-1',
	avatarURL: '',
	name: 'Guest',
	occupation: 'Frontend Deloper: JS / React',
	bannerURL: 'https://picsum.photos/600/300',
};

export const defaultChannel: iChannel = {
	createdAt: Date.now(),
	updatedAt: Date.now(),
	description: '',
	label: 'none',
	messages: [],
	type: 'user',
	members: [],
	id: '0',
};
