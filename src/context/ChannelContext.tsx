import { createContext, useContext, useState } from 'react';
import { defaultChannel } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, iChannel, iChannelContext, iMessage } from '../types';

const ChannelContext = createContext<iChannelContext | Record<string, never>>({});
export const useChannelContext = () => useContext(ChannelContext);

function ChannelContextProvider({ children, ...props }: HTMLElementProps) {
	const [activeChannel, setActiveChannel] = useState<iChannel>(defaultChannel);

	const getChannel = async (channelId: string) => {
		// TODO: Implement
		console.log('getChannel not implemented');
		return defaultChannel;
	};

	const changeChannel = async (channelId: string) => {
		// TODO: Implement
		console.log('changeChannel not implemented');
		return defaultChannel;
	};

	const getUsers = async (channelId: string) => {
		// TODO: Implement
		console.log('getUsers not implemented');
		return [];
	};

	const getMessages = async (channelId: string) => {
		// TODO: Implement
		console.log('getMessages not implemented');
		return [];
	};

	const pushMessage = async (message: iMessage) => {
		// TODO: Implement
		console.log('pushMessage not implemented');
		return message;
	};

	return (
		<ChannelContext.Provider {...props} value={{
			getChannel: getChannel,
			changeChannel: changeChannel,
			activeChannel: activeChannel,
			setActiveChannel: setActiveChannel,
			getUsers: getUsers,
			pushMessage: pushMessage,
			getMessages: getMessages
		}}>
			{children}
		</ChannelContext.Provider>
	);
}

export default ChannelContextProvider;
