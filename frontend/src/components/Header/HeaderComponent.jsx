import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineLogout} from 'react-icons/md'

const HeaderComponent = (props) => {
    console.log(props)
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
                    <li className="nav-item m-3">
                        <Link to={"/about"} className="nav-link">
                            <strong className="h2 text-primary">About</strong>
                        </Link>
                    </li>
                    <li className="nav-item m-3">
                        {
                            props.isAdmin ? 
                            <Link to={"/dashboard"} className="nav-link">
                                        <strong className="h2 text-primary">Admin</strong>
                            </Link>:
                            <li></li>
                        }
                    </li>
                </ul>
            </div>
            {
               props.isToken ?
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-brand bg-primary infor">   
                            <Link to={"/profile"}>
                                <img className="btn btn-link w-50" src={props.userData?.profile_id[0].avatar} />
                            </Link>
                            <button className="navbar-brand btn btn-link">
                                <MdOutlineLogout onClick={() => props.isLogout()} style={{ fontSize: "40px" }} />
                            </button>
                        </li>
                    </ul>
                :
                <button className="navbar-brand btn btn-link">
                    <FaUserCircle onClick={() => props.isLogin()}  style={{fontSize: "90px"}}/>
                </button>
            }            
        </nav>
    )
};

export default HeaderComponent