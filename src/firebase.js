import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALfkd5w819NCCu2Z269qQboYBOPlU4upM",
  authDomain: "chating-931b8.firebaseapp.com",
  projectId: "chating-931b8",
  storageBucket: "chating-931b8.appspot.com",
  messagingSenderId: "981830527687",
  appId: "1:981830527687:web:39d2fdb2aa8617cc9fece2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db =getFirestore()