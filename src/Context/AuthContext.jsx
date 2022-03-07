import { useState } from "react";
import {createContext} from "react";

export const AuthContext = createContext();


export const AuthContextProvider=({children})=>{
    const [token,setToken] = useState("");
    const handleToken = (token)=>{
        setToken(token);
    }
    return <AuthContext.Provider value={{token,handleToken}}>

{children}
    </AuthContext.Provider>
}