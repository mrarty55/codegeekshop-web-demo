import {
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASR_MEASUREMENT_ID
} from '$env/static/private';
import { initializeApp } from 'firebase/app';
import type { FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID,
	measurementId: FIREBASR_MEASUREMENT_ID
};

export const firebaseInstance = initializeApp(firebaseConfig);
