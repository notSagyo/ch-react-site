import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { iChannel, IUser } from '../../types';
import usersJSON from '../../json/users.json';
import { getChannel } from '../../components/Channel/ChannelHelper';
import { isEmptyObject } from '../../utils';

// Recoil declarations =======================================================//
export const CurrentUserState = atom<IUser>({
	key: 'CurrentUser',
	default: {
		created: Date.now(),
		email: '',
		id: '-1',
		avatarURL: '',
		name: '',
		occupation: 'Frontend Deloper: JS / React',
		bannerURL: 'https://picsum.photos/600/300',
	},
});

export const ActiveChannelState = atom<iChannel>({
	key: 'ActiveChannel',
	default: {
		created: Date.now(),
		updated: Date.now(),
		description: '',
		label: 'none',
		messages: [],
		type: 'user',
		members: [],
		id: '-1',
	},
	effects: [
		({onSet}) => {
			onSet(newValue => {
				localStorage.setItem(newValue.id, JSON.stringify(newValue));
			});
		},
	],
});

// Functions =================================================================//
// Messages ==================================================================//
export function usePushMessage() {
	const [activeChannel, setActiveChannel] = useRecoilState(ActiveChannelState);

	return function(content: string) {
		if (!content)
			return;

		const newMessage = {
			channelId: activeChannel.id,
			id: Date.now().toString(),
			created: Date.now(),
			content: content,
			userId: 'User',
		};

		setActiveChannel(oldActiveChannel => ({ ...oldActiveChannel,
			messages: [...oldActiveChannel.messages, newMessage]
		}));
	};
}

// Channels ==================================================================//
export function useChangeChannel() {
	const setActiveChannel = useSetRecoilState(ActiveChannelState);

	return async function(channelId: string) {
		const channel = await getChannel(channelId);
		if (channel) {
			setActiveChannel(channel);

			// !XXX: ONLY needed while using local storage AND JSON. NOT A DATABASE.
			const channelFromStorage = JSON.parse(localStorage.getItem(channelId) || '{}');
			if (!isEmptyObject(channelFromStorage)) {
				setActiveChannel(channelFromStorage);
			}
		}
	};
}

// Users =====================================================================//
export function getUser(id: string): IUser | undefined {
	const user = usersJSON.find(user => user.id == id);
	return user;
}
