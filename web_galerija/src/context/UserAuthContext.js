import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut, setPersistence, 
  browserLocalPersistence
} from "firebase/auth";
import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  async function logIn(email, password) {
    await setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    });
    console.log("Still waiting");
  }

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
