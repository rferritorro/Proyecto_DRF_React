import React, { useEffect, useState } from "react";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
import AuthService from "../services/AuthService"
import { useNavigate } from "react-router-dom"
const Context = React.createContext({});

export function UserContext({ children }){
    const navigate = useNavigate()
    const checkUser = async()=>{
        if(JWTGetToken){
            console.log("USERCONTEXT1")
            const res = await AuthService.loginUser()
            const response = await res.json()
            if(response.token && response.user){
                console.log("USERCONTEXT1.1")
                setJWT(response.token)
                setUser(response.user)
            }else{
                console.log("USERCONTEXT1.2")
                JWTRemoveToken()
                if(window.location.pathname != '/'){
                    navigate('/')
                }
            }

        }else{
            console.log("USERCONTEXT2")
            JWTRemoveToken()
            if(window.location.pathname != '/'){
                navigate('/')
                console.log("USERCONTEXT2.2")
            }
        }
    }

    const [jwt, setJWT] = useState(() => checkUser());
    const [user, setUser] =useState(null)
    return (
        <Context.Provider value={{ jwt, setJWT,user,setUser }}>{ children }</Context.Provider>
    );
}
export default Context