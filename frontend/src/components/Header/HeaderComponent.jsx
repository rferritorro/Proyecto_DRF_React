import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
//import {AiOutlineNotification} from "react-icons/ai"

const HeaderComponent = () => {
    return (
        <div className="headerComponent">
            <div className="principalMain">
                <Link to={"/"}>
                    <img className="logo" src="./logo_biosbike.png"/>
                </Link>
                <div className="infor">
                    <Link to={"/"} className="header_decoration">
                        <strong>Home</strong>
                    </Link>
                    <Link to={"/stations"} className="header_decoration">
                        <strong>Stations</strong>
                    </Link>
                    <Link to={"/about"} className="header_decoration">
                        <strong>About</strong>
                    </Link>
                    {/* <AiOutlineNotification style={{fontSize: "20px"}}/> */}
                </div>
                <Link to={"/"}>
                    <FaUserCircle style={{fontSize: "90px"}}/>
                    {/* <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/> */}
                </Link>
            </div>
        </div>
    )
};

export default HeaderComponent