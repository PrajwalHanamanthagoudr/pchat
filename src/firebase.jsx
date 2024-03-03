import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsjRK3kg-4G5iJq4aYv70viHw6YO6ZbEk",
  authDomain: "chit-chat-praju.firebaseapp.com",
  projectId: "chit-chat-praju",
  storageBucket: "chit-chat-praju.appspot.com",
  messagingSenderId: "610779239189",
  appId: "1:610779239189:web:166b159f7e2a9ef0ae8f1c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { app, auth, storage, db };
