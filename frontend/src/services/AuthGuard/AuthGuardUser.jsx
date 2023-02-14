import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import UserContext from "../../context/UserContext"

function AuthGuardUser() {
    const { users } = useContext(UserContext)
    console.log(users)
    return users ? <Navigate to="/"/> : <Outlet />
}

export default AuthGuardUser;