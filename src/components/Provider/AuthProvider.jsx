import React, { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("onAuthstatechanged", currentUser);
         setUser(currentUser);
         setLoading(false);
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const logOut = () => {
      signOut(auth);
   };

   const googleLogin = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const looggedUser = result.user;
            console.log(looggedUser);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const authInfo = {
      loading,
      user,
      createUser,
      loginUser,
      logOut,
      googleLogin,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
