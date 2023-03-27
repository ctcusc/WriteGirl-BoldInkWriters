// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "writegirl-1d063.firebaseapp.com",
  projectId: "writegirl-1d063",
  storageBucket: "writegirl-1d063.appspot.com",
  messagingSenderId: "724166144224",
  appId: "1:724166144224:web:a337ae2c095ad0613f6085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);