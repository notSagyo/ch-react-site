// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

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
