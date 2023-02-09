import React, {Suspense} from "react";
import {useAuth} from "../../hooks/useAuth"
const RegisterComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Login/RegisterComponent")), 1500)
    })
})

const RegisterPage = () => {
    const {register} = useAuth()

    const formData = (value) => {
        register(value)
        console.log(value)
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <RegisterComponent formData={formData}/>
        </Suspense>
    )
}

export default RegisterPage;