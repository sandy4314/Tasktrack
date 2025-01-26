import React, { createContext, useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage'





export const AuthContext=createContext()

const AuthProvider = ({children}) => {

    //localStorage.clear()
    const [userData,setUserData]=useState(null)
    useEffect(() => {
      setLocalStorage()
      const {employees}=getLocalStorage()
      setUserData(employees)
     
    }, [])
    
  return (
    <div>
         <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    </div>
  )
}

export default AuthProvider