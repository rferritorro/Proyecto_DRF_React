import React, { useEffect, useState } from "react";
import {FiSettings} from 'react-icons/fi'
import {MdSend} from 'react-icons/md'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import "./ProfileComponent.css"
const ProfileComponent = (props) => {
    const [valueUsername, setUsername] = useState()
    const [valueEmail, setEmail] = useState()
    const [valueAvatar, setAvatar] = useState()
    const [valuePassword, setPassword] = useState()
    const formProfile = {
        "username": valueUsername ? valueUsername: props.userData?.username,
        "email": valueEmail ? valueEmail: props.userData?.profile_id[0].email,
        "avatar": valueAvatar ? valueAvatar :  props.userData?.profile_id[0].avatar,
        "profile_id": props.userData?.profile_id[0].id,
        "password": valuePassword ? valuePassword: props.userData?.password,
    }
    return (
        <div className="border text-center m-5">
            <div className="bg-primary p-3 text-center">
                <h5>
                    <strong>Username: </strong>
                    {
                        props.update ?
                        <input type="text" onKeyUp={event => setUsername(event.target.value)} defaultValue={formProfile.username} className="bg-transparent text-center"/>:
                        <input type="text" readOnly value={formProfile.username} className="bg-transparent text-center border-0"/>
                    }
                </h5>
            </div>
            <hr></hr>
            <strong>Email:</strong>
            {
                props.update ?
                <input type="text" onKeyUp={event => setEmail(event.target.value)} className="m-2 text-center bg-transparent" defaultValue={formProfile.email}/>:
                <input type="text" readOnly className="m-2 text-center bg-transparent border-0" value={formProfile.email}/>
            }
            <p></p>
            <strong>Password:</strong>
            {
                props.eye ?
                <input type="text" onKeyUp={event => setPassword(event.target.value)} className="m-2 text-center bg-transparent" defaultValue={formProfile.password}/>:
                <input type="password" className="m-2 text-center bg-transparent border-0" defaultValue={formProfile.password}/>
            }
            {
                props.update ?
                <strong>
                    {
                        props.eye ?
                        <AiFillEye onClick={() => props.viewEye(false)} className="btn btn-link" style={{ fontSize: "70px" }} /> :
                        <AiFillEyeInvisible onClick={() => props.viewEye(true)} className="btn btn-link" style={{ fontSize: "70px" }} />
                    }
                </strong>:
                <div></div>
            }
           

            <div>
                <img className="w-25 m-3" src={formProfile.avatar} />
                <p></p>
                {
                    props.update ?
                    <div>
                        <strong>Url: </strong>
                        <input type="text" onKeyUp={event => setAvatar(event.target.value)} defaultValue={formProfile.avatar} className="bg-transparent text-center"/>
                    </div>:
                    <div></div>
                }
                 
                <p></p>
                <FiSettings className="btn btn-link" onClick={() => props.isSettings()} style={{ fontSize: "70px" }} />
                {
                   props.update ?
                   <MdSend className="btn btn-link" onClick={() => props.submit(formProfile, props.userData?.id)} style={{ fontSize: "70px" }} />:
                   <div></div>
                }
            </div>
        </div>
    )
}

export default ProfileComponent;