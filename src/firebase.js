// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA924TEh22tSnhC21adORAPVvd2BB72AhI",
  authDomain: "my-dictionary-6edd8.firebaseapp.com",
  projectId: "my-dictionary-6edd8",
  storageBucket: "my-dictionary-6edd8.appspot.com",
  messagingSenderId: "851580886718",
  appId: "1:851580886718:web:e159cc48b1335bd9bb88ef",
  measurementId: "G-KVG0B9RGVP"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };