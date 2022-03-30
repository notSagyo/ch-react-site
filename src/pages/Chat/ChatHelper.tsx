import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { iChannel, iMessage } from '../../types';

// Recoil declarations =======================================================//
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
});

export const MessageListState = atom<iMessage[]>({
	key: 'MessageList',
	default: [],
});

// Functions =================================================================//
export function usePushMessage() {
	const messagelist = useRecoilValue(MessageListState);
	const activeChannel = useRecoilValue(ActiveChannelState);
	const setMessageList = useSetRecoilState(MessageListState);
	const setActiveChannel = useSetRecoilState(ActiveChannelState);

	return function(content: string) {
		if (!content)
			return;

		setMessageList((oldMessageList) => (
			[...oldMessageList, {
				channelId: activeChannel.id,
				id: Date.now().toString(),
				created: Date.now(),
				content: content,
				userId: 'User',
			}]
		));

		setActiveChannel(oldActiveChannel => ({
			...oldActiveChannel,
			messages: messagelist
		}));
	};
}
