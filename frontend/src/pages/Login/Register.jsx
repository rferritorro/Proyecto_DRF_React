import React, {Suspense} from "react";
const RegisterComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Login/RegisterComponent")), 2000)
    })
})

const RegisterPage = () => {
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <RegisterComponent />
        </Suspense>
    )
}

export default RegisterPage;