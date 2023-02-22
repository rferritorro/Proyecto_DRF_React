import React, { useState } from "react";
import "./NotificationComponent.css"
import { Link } from "react-router-dom";
const NotificationsComponent = (props) => {
    console.log(props)
    return (
        <div className="m-5">
            {
                props.notification.length == 0 ?
                <div>
                    <h3 className="text-center text-primary"><u>You don't have Notifications</u></h3><p></p>
                </div>:
                <div>
                    <h3 className="text-center text-primary"><u>Notifications</u></h3><p></p>
                </div>
            }
            {
                props.notification.map((data,index) => (
                    <div>
                        <div className="text-center mx-auto m-3">
                            <div className="logo">
                                {
                                    data.type == 1 ?
                                    <img src="/logo_biosbike.png" />:
                                    data.type == 2 ?
                                    <img src="https://api.dicebear.com/5.x/big-smile/svg?seed=bioskin"/>:
                                    <img src="https://illustoon.com/photo/7238.png" />
                                }  
                            </div>
                            <div className="m-2">
                                {data.body}:
                            </div>
                            {
                                data.incidence_id ?
                                <Link to={"/profile/incidences"} className={"text-black text-decoration-none"}>
                                    {
                                        data.type == 1 ?
                                        <div className={`bg-light rounded-3 mx-auto divMessages`} onClick={() => props.checkIncidence()}>
                                            <div>
                                                <ul>
                                                    <li><strong>Answer of Administrator:</strong></li>
                                                    <p>&nbsp;{data.incidence_id?.answer}</p>
                                                </ul>
                                            </div>
                                        </div>:
                                        <div className={`bg-light rounded-3 mx-auto divMessages`} onClick={() => props.checkIncidence()}>
                                        <div>
                                            <ul>
                                                <li><strong>Message pending answer of Administrator:</strong></li>
                                                <p>&nbsp;{data.incidence_id?.description}</p>
                                            </ul>
                                        </div>
                                    </div>
                                    }
                                </Link>:
                                <div></div>
                            }
                            <div className="m-2">
                                {data.date.replace('T', ' ')}
                            </div>
                        </div><hr className="hrAlert"></hr>
                    </div>
                ))
            }
        </div>
    )
}

export default NotificationsComponent;