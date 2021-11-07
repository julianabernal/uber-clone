// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjYtQ4MmsR-UCP_siDl5uPDp74bqqQo4s",
  authDomain: "uber-clone-c7ebd.firebaseapp.com",
  projectId: "uber-clone-c7ebd",
  storageBucket: "uber-clone-c7ebd.appspot.com",
  messagingSenderId: "535560711619",
  appId: "1:535560711619:web:a6d0b08ef888f044c7a176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
