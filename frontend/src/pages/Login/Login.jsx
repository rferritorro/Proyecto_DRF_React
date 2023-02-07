import React, {Suspense, useState} from "react";
import {useAuth} from "../../hooks/useAuth"
const LoginComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Login/LoginComponent")), 2000)
    })
})

const LoginPage = () => {
    const [dataUser, setDataUser] = useState()
    const {login} = useAuth();
    const formData = (value) => {
        login(value)
        setDataUser(value)
    }
    console.log(dataUser)
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <LoginComponent formData={formData}/>
        </Suspense>
    )
}

export default LoginPage;