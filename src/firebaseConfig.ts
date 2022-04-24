// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, enableMultiTabIndexedDbPersistence } from '@firebase/firestore';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	getAuth,
	setPersistence,
	browserLocalPersistence,
	User,
} from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAXZbpwGIYAyEuU0maP2pBI4nh7QrtXmO0',
	authDomain: 'portfolio-85693.firebaseapp.com',
	projectId: 'portfolio-85693',
	storageBucket: 'portfolio-85693.appspot.com',
	messagingSenderId: '20009869405',
	appId: '1:20009869405:web:929394e2e932096dd02db4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

enableMultiTabIndexedDbPersistence(db)
	.catch((err) => {
		if (err.code == 'failed-precondition')
			console.error(err);
		else if (err.code == 'unimplemented')
			console.error(err);
	});

export const firebaseSignIn = async () => {
	let user: User | undefined;

	await setPersistence(auth, browserLocalPersistence);
	await signInWithPopup(auth, provider)
		.then((result) => {
			user = result.user;
			return user;
		}).catch((error) => {
			console.error(error);
		});

	window.location.reload()
	return user;
};

export const fireBaseSignOut = async () => {
	await signOut(auth);
	window.location.reload();
};
