import React, {Suspense, useState} from "react";
import {useAuth} from "../../hooks/useAuth"
const RegisterComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Login/RegisterComponent")), 1500)
    })
})

const RegisterPage = () => {
    const {register} = useAuth()
    const [eye, setEye] = useState(false)
    const viewEye = (value) => {
        setEye(value)
    }
    const formData = (value) => {
        register(value)
        console.log(value)
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <RegisterComponent formData={formData} viewEye={viewEye} eye={eye}/>
        </Suspense>
    )
}

export default RegisterPage;