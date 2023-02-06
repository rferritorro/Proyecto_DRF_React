import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
//import {AiOutlineNotification} from "react-icons/ai"

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
                    <img className="w-25 m-4" src="/logo_biosbike.png"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item m-3">
                        <Link to={"/"} className="nav-link">
                            <p className="h2 text-primary">Home</p>
                        </Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to={"/stations"} className="nav-link">
                            <strong className="h2 text-primary">Stations</strong>
                        </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    <li className="nav-item m-3">
                        <Link to={"/about"} className="nav-link">
                            <strong className="h2 text-primary">About</strong>
                        </Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to={"/dashboard"} className="nav-link">
                            <strong className="h2 text-primary">Admin</strong>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to={"/login"} className="navbar-brand">
                <FaUserCircle style={{fontSize: "90px"}}/>
            </Link>
        </nav>
        /* <div className="headerComponent">
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
                    <AiOutlineNotification style={{fontSize: "20px"}}/>
                </div>
                <Link to={"/"}>
                    <FaUserCircle style={{fontSize: "90px"}}/>
                    <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
                </Link>
            </div>
        </div> */
    )
};

export default HeaderComponent