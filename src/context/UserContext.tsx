import { createContext, useContext, useEffect, useState } from 'react';
import { firebaseSignIn } from '../firebaseConfig';
import { User, getAuth } from '@firebase/auth';
import { defaultUser } from '../pages/Chat/ChatHelper';
import { HTMLElementProps, iUser, iUserContext } from '../types';

const UserContext = createContext<iUserContext | Record<string, never>>({});
export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children, ...props }: HTMLElementProps) {
	const [activeUser, setActiveUser] = useState<iUser>(defaultUser);
	const [authUser, setAuthUser] = useState<User | undefined>();

	const signIn = async () => {
		if (authUser)
			return;
		await firebaseSignIn();
	};

	const getUser = async (userId: string) => {
		// TODO: Implement
		console.log('getUser not implemented');
		return defaultUser;
	};

	const createUser = async (user: iUser) => {
		// setDoc()
		console.log('createUser not implemented');

		return user;
	};

	// Listen to auth user state changes
	useEffect(() => {
		const unsubscribe = getAuth().onAuthStateChanged((signedUser) => {
			if(signedUser){
				setAuthUser(signedUser);
				setActiveUser({
					...activeUser,
					id: signedUser.uid,
					...(signedUser.displayName && { name: signedUser.displayName }),
					...(signedUser.email && { email: signedUser.email }),
					...(signedUser.photoURL && { photoURL: signedUser.photoURL }),
				});
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<UserContext.Provider {...props} value={{
			activeUser: activeUser,
			setActiveUser: setActiveUser,
			authUser: authUser,
			setAuthUser: setAuthUser,
			getUser: getUser,
			createUser: createUser,
			signIn: signIn,
		}}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
