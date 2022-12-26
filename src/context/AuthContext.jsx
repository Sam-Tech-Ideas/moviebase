import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function signup(email, password) {
       createUserWithEmailAndPassword(auth, email, password);
       setDoc(doc(db, "users", email), {
        savedShows: [],
      }
        )
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password
        );
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        
                setUser(currentUser);
        });
        return unsubscribe;
    }, []);


    function logout() {
        return signOut(auth);
    }





  return <AuthContext.Provider value={{signup,login, logout, user }}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
