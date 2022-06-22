import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  /*apiKey: "AIzaSyBhY9wkkBdN-zxRrVI1aHdIRBiRDKIlAlc",
  authDomain: "fir-proba-5605f.firebaseapp.com",
  projectId: "fir-proba-5605f",
  storageBucket: "fir-proba-5605f.appspot.com",
  messagingSenderId: "1094006332247",
  appId: "1:1094006332247:web:b167b62b7a3a6191ad3c12"*/
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
