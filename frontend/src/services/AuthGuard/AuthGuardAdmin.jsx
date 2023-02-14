import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import UserContext from "../../context/UserContext"

function AuthGuardAdmin() {
    const { Admin } = useContext(UserContext)
    console.log(Admin)
    return Admin ? <Outlet /> : <Navigate to="/login"/>
}

export default AuthGuardAdmin;