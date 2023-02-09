import { useEffect, useCallback, useState, useContext } from "react";
import AuthService from "../services/AuthService";
import JWTService from "../services/JWTService"
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import {  toast } from 'react-toastify';
export function useAuth() {
    const {user, setUser} = useContext(UserContext);
    const { jwt, setJWT } = useContext(UserContext);
    const navigate = useNavigate()
    const login = useCallback((data) => {
        AuthService.loginUser(data)
        .then(({data}) => {
            JWTService.JWTPutToken(data.token)
            toast.success('LOGIN', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
            navigate("/")
        }).catch(() => {
            toast.error('Username or password not correct!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
    }, [])

    const register = useCallback((data) => {
        console.log(data)
        AuthService.registerUser(data)
        .then(({data}) => {
            //setUser(data)
            JWTService.JWTPutToken(data.token)
            toast.success('REGISTER', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
            navigate("/")
        }).catch(() => {
            toast.error('Username or email are exist correct!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
    }, [])

    const userlogout = useCallback(() => {
        toast.info('LogOut!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        })
        JWTService.JWTRemoveToken()
    }, [])

    const userLoged = () => {
        console.log(user)
        if (user) {
            return true
        }else {
            return false
        }
    }

    return {
         login, userLoged, userlogout, user: user, register
    }
}