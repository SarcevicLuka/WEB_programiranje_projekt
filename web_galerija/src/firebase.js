import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGOULnRJcF8VaWgyn-FEtCRQUr1TSadss",

  authDomain: "web-galerija-eef8e.firebaseapp.com",

  projectId: "web-galerija-eef8e",

  storageBucket: "web-galerija-eef8e.appspot.com",

  messagingSenderId: "183813867497",

  appId: "1:183813867497:web:f8470f1919a1aa9ddc2d78",

  measurementId: "G-2KHL0GEL1T"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export default app;
