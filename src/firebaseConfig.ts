// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, getAuth, UserCredential, User } from '@firebase/auth';

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
export const firebaseSignIn = async () => {
	let user: User | undefined;
	await signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			// The signed-in user info.
			user = result.user;
			// ...
			return user;
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
	return user;
};
