import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiw6TS7OO8gztP5z73QvmP-_1rLZMqWkI",
  authDomain: "alumini-interaction.firebaseapp.com",
  projectId: "alumini-interaction",
  storageBucket: "alumini-interaction.appspot.com",
  messagingSenderId: "654975403818",
  appId: "1:654975403818:web:f30e2b774be3988cf70053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const firestore  = getFirestore(app);
const storage  = getStorage(app);
const db = getFirestore(app);

export {app, auth, firestore, storage, db}