// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuxv1x8hNs5PUwhZWFrje173pY35izIb4",
  authDomain: "dec-empire-web.firebaseapp.com",
  projectId: "dec-empire-web",
  storageBucket: "dec-empire-web.appspot.com",
  messagingSenderId: "442119692370",
  appId: "1:442119692370:web:acc28306bdbec730a53f8b",
  measurementId: "G-29WWSVNFTL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();