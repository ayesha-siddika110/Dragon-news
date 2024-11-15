import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase/firebase';

export const AuthContext = createContext() //AuthContext Export korte hobe 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);
    

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateProfileData = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }

    
    const authinfo ={
        user,
        setUser,
        createUser,
        updateProfileData
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            
                setUser(currentUser);
        })

        return ()=>{
            unsubscribe()
        }
    },[])





    return <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;