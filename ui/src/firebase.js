// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyADXaC6IATkHoqiol8-0PgM13ORi-yyJr4",
  authDomain: "isikoltu.firebaseapp.com",
  projectId: "isikoltu",
  storageBucket: "isikoltu.appspot.com",
  messagingSenderId: "885717130009",
  appId: "1:885717130009:web:b22de7d153ba4b5c21c388",
  measurementId: "G-09RNJ6RP01"
});

// Initialize Firebase
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const storage=firebase.storage();
const analytics = getAnalytics(app);

export {db , auth , storage}