import { createContext, useContext, useState } from 'react';
import { defaultUser } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, IUser, iUserContext } from '../types';

const UserContext = createContext<iUserContext | Record<string, never>>({});
export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children, ...props }: HTMLElementProps) {
	const [activeUser, setActiveUser] = useState<IUser>(defaultUser);

	const getUser = async (userId: string) => {
		// TODO: Implement
		console.log('getUser not implemented');
		return defaultUser;
	};

	return (
		<UserContext.Provider {...props} value={{
			activeUser: activeUser,
			setActiveUser: setActiveUser,
			getUser: getUser,
		}}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
