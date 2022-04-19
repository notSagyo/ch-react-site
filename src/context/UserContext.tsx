import { createContext, useContext, useEffect, useState } from 'react';
import { firebaseSignIn } from '../firebaseConfig';
import { User, getAuth } from '@firebase/auth';
import { getDoc, setDoc, addDoc, updateDoc, doc, collection } from '@firebase/firestore';
import { defaultUser } from '../pages/Chat/ChatHelper';
import { db } from '../firebaseConfig';
import { HTMLElementProps, iUser, iUserContext } from '../types';
import { FirebaseError } from 'firebase/app';

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
		const usersDoc = await getDoc(doc(db, 'users', user.id));

		if (usersDoc.exists()) {
			console.warn(`(Firestore): user ${user.id} already exists`);
			return false;
		}

		await setDoc(doc(db, 'users', user.id), user);
		return user;
	};

	const updateUser = async (user: iUser, create = false) => {
		updateDoc(doc(db, 'users', user.id), {...user})
			.catch((err: FirebaseError) => {
				if (err.code === 'not-found' && create) {
					console.warn(`(Firestore): user ${user.id} not found, creating...`);
					createUser(user);
				}
			});

		return defaultUser;
	};

	// Listen to auth user state
	useEffect(() => {
		const unsubscribe = getAuth().onAuthStateChanged((signedUser) => {
			if (signedUser) {
				const updatedActiveUser = {
					...activeUser,
					id: signedUser.uid,
					...(signedUser.displayName && { name: signedUser.displayName }),
					...(signedUser.email && { email: signedUser.email }),
					...(signedUser.photoURL && { photoURL: signedUser.photoURL }),
				};
				updateUser(updatedActiveUser, true);
				setAuthUser(signedUser);
				setActiveUser(updatedActiveUser);
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
			updateUser: updateUser,
			signIn: signIn,
		}}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
