import React, { useEffect, useState } from "react";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
import AuthService from "../services/AuthService"
import { useNavigate } from "react-router-dom"
const Context = React.createContext({})
export function UserContextProvider({ children }) {
    //const [jwt, setJWT] = useState(() => checkUser());
    const navigate = useNavigate()
    useEffect(() => {
        isAdmin()
    }, [])
    const checkUser = async () => {
        if (JWTGetToken) {
            const res = await AuthService.getProfile(6)
            if (res) {
                setUser(res.data[0])
            }
        } else {
            JWTRemoveToken()
            navigate('/')
        }
    }
    const isAdmin = async () => {
        if (JWTGetToken) {
            const res = await AuthService.isAdmin(10)
            if (res) {
                console.log(res)
            }
        }else {
            JWTRemoveToken()
            navigate('/')
        }
    }
    const [users, setUser] = useState(null)
    const [jwt, setJWT] = useState(() => checkUser())
    return (
        <Context.Provider value={{ jwt, setJWT, users, setUser }}>{children}</Context.Provider>
    );
}
export default Context