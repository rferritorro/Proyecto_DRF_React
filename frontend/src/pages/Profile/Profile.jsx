import React, {Suspense, useState, useContext} from "react";
import {useAuth} from "../../hooks/useAuth"
import UserContext from "../../context/UserContext"

const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Profile/ProfileComponent")), 1500)
    })
})

const ProfilePage = () => {
    const {users, setUser} = useContext(UserContext);
    console.log(users)
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <ProfileComponent userData={users}/>
        </Suspense>
    )
}

export default ProfilePage;