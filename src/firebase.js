// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5_slWvhwIMi01muvjbD7Way41bKgDrN8",
  authDomain: "movieflix-1f340.firebaseapp.com",
  projectId: "movieflix-1f340",
  storageBucket: "movieflix-1f340.appspot.com",
  messagingSenderId: "588944682009",
  appId: "1:588944682009:web:fe2bd5e360345e3a07ce88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

