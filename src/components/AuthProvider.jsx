/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    setLoading(true)
    return signOut(auth);
  };


  const updateUserProfile  = (updatedData) =>{
    setLoading(true)
   return updateProfile(auth.currentUser, updatedData)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('state captured', currentUser?.email);
      if(currentUser?.email){ 
        const user  = {email: currentUser.email}

        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user,{withCredentials:true})
        .then(res => {
          console.log('login token',res.data)
          setLoading(false);
        })
      }
      else{
        axios.post(`${import.meta.env.VITE_API_URL}/logout`,{},{
          withCredentials:true
        })
        .then(res => {
          console.log('logout',res.data)
          setLoading(false);
        })
      }
      
    });
    return () => {
      unsubscribe();
    };
  }, []);




  const authInfo = {
    googleLogin,
    handleLogin,
    handleRegister,
    handleLogout,
    updateUserProfile,
    user,
    setUser,
    loading

  };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;