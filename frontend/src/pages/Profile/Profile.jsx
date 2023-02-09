import React, {Suspense, useState} from "react";
import {useAuth} from "../../hooks/useAuth"

const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Profile/ProfileComponent")), 1500)
    })
})

const ProfilePage = () => {
 
   
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <ProfileComponent />
        </Suspense>
    )
}

export default ProfilePage;