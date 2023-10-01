import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
  
    // login
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //signout
    const logout=()=>{

        return signOut(auth)
    }



    const authInfo={user,createUser,login,logout,loading}


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('observing the stated ',currentUser);
            setUser(currentUser);
            setLoading(false)

        })
        return ()=>{
            unsubscribe()
        }
    },[])

    return   (
    <AuthContext.Provider value={authInfo} >
{
    children
}
        </AuthContext.Provider>
    );

    }
    AuthProvider.propTypes ={
        children:PropTypes.node
    }
export default AuthProvider;
