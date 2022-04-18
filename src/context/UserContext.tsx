import { createContext, useContext, useState } from 'react';
import { firebaseSignIn } from '../firebaseConfig';
import { User } from '@firebase/auth';
import { defaultUser } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, IUser, iUserContext } from '../types';

const UserContext = createContext<iUserContext | Record<string, never>>({});
export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children, ...props }: HTMLElementProps) {
	const [activeUser, setActiveUser] = useState<IUser>(defaultUser);
	const [authUser, setAuthUser] = useState<User | undefined>();

	const logIn = async () => {
		if (authUser)
			return;
		const signedUser = await firebaseSignIn();
		setAuthUser(signedUser);
		if (signedUser) {
			setActiveUser({
				...activeUser,
				id: signedUser.uid,
				...(signedUser.displayName && { name: signedUser.displayName }),
				...(signedUser.email && { email: signedUser.email }),
				...(signedUser.photoURL && { photoURL: signedUser.photoURL }),
			});
		}
		return signedUser;
	};

	const getUser = async (userId: string) => {
		// TODO: Implement
		console.log('getUser not implemented');
		return defaultUser;
	};

	return (
		<UserContext.Provider {...props} value={{
			activeUser: activeUser,
			setActiveUser: setActiveUser,
			authUser: authUser,
			setAuthUser: setAuthUser,
			logIn: logIn,
			getUser: getUser,
		}}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
