import React, { useState } from "react";
import './Auth.css'
import {AiOutlineUserAdd, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const LoginComponent = (props) => {
    const [valueUsername, setUsername] = useState()
    const [valuePassword, setPassword] = useState()
    const [errorUsername, setErrorUsername] = useState()
    const [errorPassword, setErrorPassword] = useState()
    const formLogin = {
        "username": valueUsername,
        "password": valuePassword
    }
    console.log(props)
    const submitLogin = () => {
        if (!valueUsername) {
            setErrorUsername("*Username can't be blank. Please insert an username")
        }
        if (!valuePassword) {
            setErrorPassword("*Password can't be blank. Please insert an password")
        }
        
        if (valueUsername.length >= 5 && valuePassword.length >= 6) {
            console.log("NO HAY ERRORRES")
            setErrorPassword("")
            setErrorUsername("")
            props.formData(formLogin)
        }else {
            console.log("ERRORES")
        }
        
        if (valueUsername.length < 5) {
            setErrorUsername("*Username is not correct. Minium 5 characters")
        }else {
            setErrorUsername("")
        }
       
        if (valuePassword.length < 6) {
            setErrorPassword("*Password is not correct. Minium 6 characters")
        }else {
            setErrorPassword("")
        }


    } 
    
    return (
        <div className="FormSign">
            <div className="logo">
                <img src="/logo_biosbike.png" />
            </div>
            <div className="text-center mt-4 web">
                BIOSBIKE SIGN IN
            </div>
            <div className="p-2 mt-2">
                <div className="form-field d-flex align-items-center"> 
                    <AiOutlineUserAdd style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setUsername(event.target.value)} type={"text"} placeholder={"username"} />
                </div>
                <span className="text-danger">{errorUsername}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <RiLockPasswordFill style={{fontSize: "40px"}}/>
                    {
                        props.eye ?
                        <input onKeyUp={event => setPassword(event.target.value)} type={"text"} placeholder={"password"} />:
                        <input onKeyUp={event => setPassword(event.target.value)} type={"password"} placeholder={"password"} />
                    }
                    {
                        props.eye ?
                        <AiFillEye onClick={() => props.viewEye(false)} style={{ fontSize: "40px" }} />:
                        <AiFillEyeInvisible onClick={() => props.viewEye(true)} style={{ fontSize: "40px" }} />
                    }
                </div>
                <span className="text-danger">{errorPassword}</span>                
                <button className="btn mt-3" onClick={submitLogin}>Login</button>
            </div>
            <div className="text-center text-primary mt-4">
                <span>Don't you have an account? </span><p></p>
                <Link to={"/register"} className="text-primary">Sign UP</Link>
            </div>
        </div>
    )
}

export default LoginComponent;