import React, {Suspense} from "react";
const LoginComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Login/LoginComponent")), 2000)
    })
})

const LoginPage = () => {
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <LoginComponent />
        </Suspense>
    )
}

export default LoginPage;