import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { iChannel, iMessage } from '../../types';

// Recoil declarations =======================================================//
export const ActiveChannelState = atom<iChannel>({
	key: 'ActiveChannel',
	default: {
		id: '1',
		members: [],
		messages: [],
		type: 'user',
		name: 'none',
		description: '',
		created: Date.now(),
		updated: Date.now(),
	},
});

export const MessageListState = atom<iMessage[]>({
	key: 'MessageList',
	default: [],
});

// Functions =================================================================//
export function usePushMessage() {
	const messagelist = useRecoilValue(MessageListState);
	const setMessageList = useSetRecoilState(MessageListState);
	const setActiveChannel = useSetRecoilState(ActiveChannelState);

	return function(content: string) {
		if (!content)
			return;

		setMessageList((oldMessageList) => (
			[...oldMessageList, {
				id: Date.now().toString(),
				channelId: '1',
				userId: '1',
				content: content,
				created: Date.now(),
			}]
		));

		setActiveChannel(oldActiveChannel => ({
			...oldActiveChannel,
			messages: messagelist
		}));
	};
}
