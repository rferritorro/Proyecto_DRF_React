import React, { useEffect, useState } from "react";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
import AuthService from "../services/AuthService"
import { useNavigate } from "react-router-dom"
const Context = React.createContext({})
export function UserContextProvider({ children }) {
    //const [jwt, setJWT] = useState(() => checkUser());
    const [users, setUser] = useState(null)
    const [ Admin, setIsAdmin ] = useState(false);
    let id = JWTGetToken()?.split("id_")[1]
    const navigate = useNavigate()
    useEffect(() => {
        isAdmin()
        checkUser()
        console.log(users)
    }, [])
    const checkUser = async () => {
        if (JWTGetToken()) {
            const res = await AuthService.getProfile(id)
            if (res) {
                setUser(res.data)
            }
        } else {
            setUser(null)
            JWTRemoveToken()
        }
    }
    const isAdmin = async () => {
        if (JWTGetToken()) {
            const res = await AuthService.isAdmin(id)
            if (res) {
                console.log(res)
                setIsAdmin(true)
            }
        }else {
            JWTRemoveToken()
            setUser(null)
            setIsAdmin(false)
        }
    }
    const [jwt, setJWT] = useState(() => checkUser())
    return (
        <Context.Provider value={{ jwt, setJWT, users, setUser, Admin, setIsAdmin, checkUser, isAdmin }}>{children}</Context.Provider>
    );
}
export default Context