import React, { useEffect, useState } from "react";
import "./ProfileComponent.css"
const ProfileComponent = (props) => {
    console.log(props.userData)
    return (
        <div>
            <div className="w-25 m-5 border">
                <div className="bg-primary p-3 text-center">
                    <h4>{props.userData.email}</h4>
                </div>
                <hr></hr>
                <div>
                    <img className="w-25 m-3" src={props.userData.avatar} />
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;