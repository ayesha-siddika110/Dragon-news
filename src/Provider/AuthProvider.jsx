import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase';

export const AuthContext = createContext() //AuthContext Export korte hobe 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading, user);
    

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateProfileData = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }

    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    const provider = new GoogleAuthProvider()
    const signInwithgoogle =()=>{
        return signInWithPopup(auth, provider)
    }

    const githubprovider = new GithubAuthProvider()
    const signInwithgithub = ()=>{
        return signInWithPopup(auth, githubprovider)
    }

    
    const authinfo ={
        user,
        setUser,
        createUser,
        updateProfileData,
        signOutUser,
        signInwithgoogle,
        signInwithgithub,
        signInUser,
        loading
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            
                setUser(currentUser);
                setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])





    return <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;