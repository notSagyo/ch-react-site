import { createContext, useContext } from 'react';
import { HTMLElementProps } from '../types';
import ChannelContextProvider from './ChannelContext';
import UserContextProvider from './UserContext';

const ChatContext = createContext({});
export const useChatContext = () => useContext(ChatContext);

function ChatContextProvider({ children, ...props }: HTMLElementProps) {
	return (
		<UserContextProvider>
			<ChannelContextProvider>
				<ChatContext.Provider {...props} value={{}}>
					{children}
				</ChatContext.Provider>
			</ChannelContextProvider>
		</UserContextProvider>
	);
}

export default ChatContextProvider;
