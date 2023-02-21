import React, {Suspense, useState, useContext} from "react";
import NotificationContext from "../../context/NotificationContext"
import IncidenceContext from "../../context/IncidenceContext";

const NotificationsComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Notifications/NotificationsComponent")), 1500)
    })
})


const NotificationsPage = () => {
    const {notification} = useContext(NotificationContext)
    const {checkIncidenceContext} = useContext(IncidenceContext)
    const checkIncidence = () => {
        checkIncidenceContext()
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
            <NotificationsComponent notification={notification} checkIncidence={checkIncidence}/>
        </Suspense>
    )
}

export default NotificationsPage;