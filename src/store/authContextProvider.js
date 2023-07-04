import { useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider=(props) =>{
    const [token,setToken]=useState(null);
    const userLoginStatus=() =>{ 
        if(token===null){
            return false;
            }
        else{return true};
        }
    
    const loginHandler=(token) =>{
        setToken(token);  
    }  
    
    const logoutHandler=() =>{
        setToken(null);  
    }  

    const authContextValue={
        token: token,
        isLoggedIn: userLoginStatus,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;