import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "TODO_KEYHERE") {
  console.warn("Firebase API Key is missing or invalid. Auth will not work.");
}
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
