import React, { useContext, useState } from "react";
import Header from '../components/Header/HeaderComponent'
import {useAuth} from "../hooks/useAuth";
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
const HeaderPage = () =>{
    const [token_logout, setLog] = useState();
    const token = JWTGetToken()
    //const {users, Admin} = useContext(UserContext);
    const { users, Admin } = useContext(UserContext);
    console.log(users)
    const {userlogout} = useAuth();
    const navigate = useNavigate();
    const isLogin = () => {
        setLog(false)
        navigate('/login')
    }
    const isLogout = () => {
        setLog(true)
        userlogout()
    }
    return (
        <Header isToken={token} isLogout={isLogout} token_logout={token_logout} isLogin={isLogin} isAdmin={Admin}/>
    )
};

export default HeaderPage;
