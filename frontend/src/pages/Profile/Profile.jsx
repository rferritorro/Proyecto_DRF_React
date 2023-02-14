import React, {Suspense, useState, useContext} from "react";
import {useAuth} from "../../hooks/useAuth"
import UserContext from "../../context/UserContext"

const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Profile/ProfileComponent")), 1500)
    })
})

const ProfilePage = () => {
    const {users} = useContext(UserContext);
    const {updateProfile} = useAuth();
    console.log(users)
    const [settings, setSetting] = useState(false)
    const isSettings = ()=> {
        console.log("SETTINGS")
        setSetting(true)
    }
    const submit = (form, id)=> {
        updateProfile(form, id)
        setSetting(false)
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <ProfileComponent userData={users} isSettings={isSettings} update={settings} submit={submit}/>
        </Suspense>
    )
}

export default ProfilePage;