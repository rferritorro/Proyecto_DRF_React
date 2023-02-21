import React, {Suspense, useState, useContext} from "react";
import {useAuth} from "../../hooks/useAuth"
import UserContext from "../../context/UserContext"
import IncidenceContext from "../../context/IncidenceContext";


const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Profile/ProfileComponent")), 1500)
    })
})

const IncidenceCreateComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Incidence/IncidenceCreateComponent")), 1500)
    })
})

const ProfilePage = () => {
    const {users} = useContext(UserContext);
    const {checkIncidenceContext} = useContext(IncidenceContext)
    
    const {updateProfile} = useAuth();
   
    const [settings, setSetting] = useState(false)
    const [eye, setEye] = useState(false)
    const viewEye = (value) => {
        setEye(value)
    }
    const isSettings = ()=> {
        setSetting(true)
    }
    const submit = (form, id)=> {
        updateProfile(form, id)
        setSetting(false)
    }

    const checkIncidence = () => {
        checkIncidenceContext()
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <ProfileComponent userData={users} isSettings={isSettings} update={settings} submit={submit} viewEye={viewEye} eye={eye}/>
            <IncidenceCreateComponent checkIncidence={checkIncidence}/>
        </Suspense>
    )
}

export default ProfilePage;