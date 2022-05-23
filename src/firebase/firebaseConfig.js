import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAjLQoBfIslWGeRTqMrryuM5j96gEiGDw",
  authDomain: "reactbook-e9617.firebaseapp.com",
  projectId: "reactbook-e9617",
  storageBucket: "reactbook-e9617.appspot.com",
  messagingSenderId: "1009889811330",
  appId: "1:1009889811330:web:a8924d79b00de1f2228d9b",
  measurementId: "G-TLWV46VB02",
};

export const firebase = initializeApp( firebaseConfig );
export const auth = getAuth( firebase );
export const db = getFirestore( firebase );