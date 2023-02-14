import React, { useEffect, useState } from "react";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
import AuthService from "../services/AuthService"
import { useNavigate } from "react-router-dom"
const Context = React.createContext({})
export function UserContextProvider({ children }) {
    //const [jwt, setJWT] = useState(() => checkUser());
    const [users, setUser] = useState(null)
    const [ Admin, setIsAdmin ] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        isAdmin()
        checkUser()
        console.log(users)
    }, [])
    const checkUser = async () => {
        if (JWTGetToken()) {
            const res = await AuthService.getProfile(users?.profile_id)
            if (res) {
                setUser(res.data[0])
            }
        } else {
            setUser(null)
            JWTRemoveToken()
        }
    }
    const isAdmin = async () => {
        if (JWTGetToken()) {
            const res = await AuthService.isAdmin(users?.profile_id)
            if (res) {
                setIsAdmin(true)
            }
        }else {
            JWTRemoveToken()
            setUser(null)
        }
    }
    const [jwt, setJWT] = useState(() => checkUser())
    return (
        <Context.Provider value={{ jwt, setJWT, users, setUser, Admin, setIsAdmin }}>{children}</Context.Provider>
    );
}
export default Context