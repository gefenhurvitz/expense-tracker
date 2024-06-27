// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyxS3NKa46Ba7tF1PUhBHrMSSrbcdjKxY",
  authDomain: "expense-tracker-45b7d.firebaseapp.com",
  projectId: "expense-tracker-45b7d",
  storageBucket: "expense-tracker-45b7d.appspot.com",
  messagingSenderId: "60940654730",
  appId: "1:60940654730:web:039261fc6125a13d157573",
  measurementId: "G-B6JXTWL4F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)



// firebase login
// firebase init
// firebase deploy