import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import UserContext from "../../context/UserContext"

function AuthGuardAdmin() {
    const { isAdmin } = useContext(UserContext)

    return isAdmin ? <Outlet /> : <Navigate to="/login"/>
}

export default AuthGuardAdmin;