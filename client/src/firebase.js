// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5a463.firebaseapp.com",
  projectId: "mern-estate-5a463",
  storageBucket: "mern-estate-5a463.appspot.com",
  messagingSenderId: "832831164402",
  appId: "1:832831164402:web:6c58e39039737b51dce56b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
