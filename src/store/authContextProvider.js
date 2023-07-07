import { useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider=(props) =>{
    const initialToken=localStorage.getItem("token");
    const [token,setToken]= useState(initialToken);

    const userLoginStatus= !!token;
    
    const loginHandler=(loginToken) =>{
        setToken(loginToken);
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