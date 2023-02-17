import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import UserContext from "../../context/UserContext"

function AuthGuardNotUser() {
    const { users } = useContext(UserContext)
    console.log(users)
    return users ?  <Outlet /> : <Navigate to="/"/>
}

export default AuthGuardNotUser;