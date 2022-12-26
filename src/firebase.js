// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmC-zDdBAcUmzSzREa3VzlgitA2vdQYPA",
  authDomain: "moviepro-ff70e.firebaseapp.com",
  projectId: "moviepro-ff70e",
  storageBucket: "moviepro-ff70e.appspot.com",
  messagingSenderId: "146810860448",
  appId: "1:146810860448:web:e8ed95a48573a4ac036ac5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

