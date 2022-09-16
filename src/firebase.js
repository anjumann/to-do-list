// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawOZLTWmZXJt-cAkdufIYy8svLmyjxdQ",
  authDomain: "todo-list-d0b32.firebaseapp.com",
  projectId: "todo-list-d0b32",
  storageBucket: "todo-list-d0b32.appspot.com",
  messagingSenderId: "608345694690",
  appId: "1:608345694690:web:e63a7f0e395eb9fba4d9bb",
  measurementId: "G-HZCQVZ60L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);

