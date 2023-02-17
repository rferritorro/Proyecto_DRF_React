import React, {Suspense, useState} from "react";
import {useAuth} from "../../hooks/useAuth"

const LoginComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Login/LoginComponent")), 1500)
    })
})

const LoginPage = () => {
    const [dataUser, setDataUser] = useState()
    const [eye, setEye] = useState(false)
    const viewEye = (value) => {
        setEye(value)
    }
    const {login} = useAuth();
    const formData = (value) => {
        login(value)
        setDataUser(value)
        console.log(dataUser)
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <LoginComponent formData={formData} viewEye={viewEye} eye={eye}/>
        </Suspense>
    )
}

export default LoginPage;