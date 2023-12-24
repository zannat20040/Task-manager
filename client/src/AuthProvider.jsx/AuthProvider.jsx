import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider 
} from "firebase/auth";
import app from "../Firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createWithPass = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, gitProvider);
  };

  const passwordSignOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      setLoading(false);
      axios.post('http://localhost:5000/jwt', {email:user.email})
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token )
            console.log('JWT Token Set in localStorage:', res.data.token);
          }
          console.log(res.data)
        })

      } else {
        localStorage.removeItem('access-token')
        setLoading(false);
        setUser(null);

      }
    });
    return () => {
      unSubcribe();
    };
  }, []);

  const authInfo = {
    createWithPass,
    loginWithPass,
    googleSignIn,
    setUser,
    user,
    passwordSignOut,
    setLoading,
    loading,
    githubSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
