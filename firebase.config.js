// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhOwpW0aRFL4FlaPPlyTb1kTnDDY1CHiE",
  authDomain: "ecommerce-owrld.firebaseapp.com",
  projectId: "ecommerce-owrld",
  storageBucket: "ecommerce-owrld.appspot.com",
  messagingSenderId: "1053561934109",
  appId: "1:1053561934109:web:9c73d2dcd55016a9f6d1f4",
  measurementId: "G-D20G804HT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 



export { auth , app }