import { iChannel, iUser } from '../../types';

// Constants =================================================================//
export const maxMessageLength = 200;

// Defaults =========================//
export const defaultUser: iUser = {
	id: '-1',
	name: 'Guest',
	email: '',
	photoURL: '',
	occupation: 'Frontend Deloper: JS / React',
	bannerURL: 'https://picsum.photos/600/300',
	updatedAt: Date.now(),
	createdAt: Date.now(),
};

export const defaultChannel: iChannel = {
	id: '0',
	type: 'team',
	label: 'Global',
	description: '',
	membersIds: [],
	messages: [],
	createdAt: Date.now(),
	updatedAt: Date.now(),
};

// Functions =================================================================//
// Messages =========================//
export const validateMessage = (content: string) => {
	content = content.trim();

	if (content.length < 1 	|| content.length > maxMessageLength) {
		throw Error('Message must be between 1 and 200 characters.');
	}

	return content;
};
