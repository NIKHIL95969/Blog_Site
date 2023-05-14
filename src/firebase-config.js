// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWSbxEhizrhPVncdonS1fM1rJgbIn8IU",
  authDomain: "blogsite-9e044.firebaseapp.com",
  projectId: "blogsite-9e044",
  storageBucket: "blogsite-9e044.appspot.com",
  messagingSenderId: "367954743645",
  appId: "1:367954743645:web:77d3732e623cb4ba0e18b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);



export const provider = new GoogleAuthProvider();