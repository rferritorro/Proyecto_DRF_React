import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div className="headerComponent">
            <div className="principalMain">
                <Link to={"/"}>
                    <img className="logo" src="https://e7.pngegg.com/pngimages/873/949/png-clipart-bicycle-orbea-mountain-bike-cycling-29er-cyclist-logo-white-text.png"/>
                </Link>
                <div className="infor">
                    <Link to={"/"} className="header_decoration">
                        <strong>Home</strong>
                    </Link>
                    <Link to={"/stations"} className="header_decoration">
                        <strong>Stations</strong>
                    </Link>
                    <Link to={"/"} className="header_decoration">
                        <strong>About</strong>
                    </Link>
                </div>
                <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
            </div>
        </div>
    )
};

export default HeaderComponent