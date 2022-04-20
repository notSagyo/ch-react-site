import { iChannel, iUser } from '../../types';

// Constants =================================================================//
export const maxMessageLength = 200;

// Functions =================================================================//
// Messages ==================================================================//
export const validateMessage = (content: string) => {
	content = content.trim();

	if (content.length < 1 	|| content.length > maxMessageLength) {
		throw Error('Message must be between 1 and 200 characters.');
	}

	return content;
};

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
	id: '-1',
};
