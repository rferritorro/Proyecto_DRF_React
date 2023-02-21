import { useEffect, useCallback, useState, useContext } from "react";
import AuthService from "../services/AuthService";
import JWTService from "../services/JWTService"
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import IncidenceContext from "../context/IncidenceContext";
import {  toast } from 'react-toastify';
import NotificationContext from "../context/NotificationContext"
import jwt_decode from "jwt-decode"

export function useAuth() {
    const navigate = useNavigate()
    const { users, setUser, jwt, setJWT, setIsAdmin, checkUser } = useContext(UserContext);
    const {incidenceProfile, setIncidenceProfile} = useContext(IncidenceContext)
    const {checkNotificationContext} = useContext(NotificationContext)
    const login = useCallback((data) => {
        AuthService.loginUser(data)
        .then(({data}) => {
            AuthService.isAdmin(data.id)
            .then(() => {
                setIsAdmin(true)
            })
            setUser(data)
            checkNotificationContext(data.id)
            JWTService.JWTPutToken(data.token)
            JWTService.JWTPutTokenRef(data.ref_token)
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
        }).catch((error) => {
            console.log(error)
            setUser(null)
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
    }, [setJWT])

    const register = useCallback((data) => {
        console.log(data)
        AuthService.registerUser(data)
        .then(({data}) => {
            setUser(data)
            checkNotificationContext(data.id)
            JWTService.JWTPutToken(data.token)
            JWTService.JWTPutTokenRef(data.ref_token)
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
            setUser(null)
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
    }, [setJWT])

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
        navigate("/")
        setUser(null)
        setIsAdmin(false)
        setIncidenceProfile(null)
        JWTService.JWTRemoveTokenRef()
        JWTService.JWTRemoveToken()
    }, [])

    const updateProfile = useCallback((data, id) => {
        AuthService.updateUser(data, id)
        .then(({data}) => {
            checkUser()
            toast.success('YOUR PROFILE IS UPDATED', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
            console.log(data)
        }).catch(() => {
            console.log("error")
        })
    }, [setJWT])

    const userLoged = () => {
        console.log(users)
        if (users) {
            return true
        }else {
            return false
        }
    }

    const checkToken = () => {
        if (jwt_decode(JWTService.JWTGetToken()).exp * 1000 >  Date.now()) {
            console.log("OK TOKEN1")
        }else if (jwt_decode(JWTService.JWTGetTokenRef()).exp * 1000 >  Date.now()) {
            console.log("OK TOKEN2")
        }else {
            userlogout()
        }
    }

    return {
         login, userLoged, userlogout, user: users, register, updateProfile, checkToken
    }
}