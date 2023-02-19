import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineLogout, MdNotificationsActive} from 'react-icons/md'
import {IoMdNotifications} from 'react-icons/io'

const HeaderComponent = (props) => {
    console.log(props)
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${props.dashPage ? "bg-dark": "bg-light"}`}>
                <Link to={"/"} className="navbar-brand">
                        <img className="w-25 m-4" src="/logo_biosbike.png" onClick={() => props.dashboardPage(false)}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item m-3">
                            <Link to={"/"} className="nav-link">
                                <p className={`h2 ${props.dashPage ? "text-white": "text-primary"}`} onClick={() => props.dashboardPage(false)}>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link to={"/stations"} className="nav-link">
                                <strong className={`h2 ${props.dashPage ? "text-white": "text-primary"}`} onClick={() => props.dashboardPage(false)}>Stations</strong>
                            </Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link to={"/about"} className="nav-link">
                                <strong className={`h2 ${props.dashPage ? "text-white": "text-primary"}`} onClick={() => props.dashboardPage(false)}>About</strong>
                            </Link>
                        </li>
                        {
                        props.isToken 
                        ?
                        <li className="nav-item m-3">
                            <Link to={"/history"} className="nav-link">
                                <strong className={`h2 ${props.dashPage ? "text-white": "text-primary"}`} onClick={() => props.dashboardPage(false)}>History</strong>
                            </Link>
                        </li>
                        : 
                        null
                        }
                        <li className="nav-item m-3">
                            {
                                props.isAdmin ? 
                                <Link to={"/dashboard"} className="nav-link">
                                        <strong onClick={() => props.dashboardPage(true)} className={`h2 ${props.dashPage ? "text-success": "text-primary"}`}>Admin</strong>
                                </Link>:
                                <li></li>
                            }
                        </li>
                    </ul>
                </div>
                {
                props.isToken ?
                        <ul className="navbar-nav mr-auto">
                            <li className={`navbar-brand infor ${props.dashPage ? "" : "bg-primary"}`}>   
                                <Link to={"/profile"}>
                                    <img className="btn btn-link w-50" src={props.userData?.profile_id[0].avatar} />
                                </Link>
                                <button className="navbar-brand btn btn-link">
                                    {/* <MdNotificationsActive style={{ fontSize: "20px" }} /> */}
                                    <IoMdNotifications style={{ fontSize: "30px" }} />
                                </button>
                                <button className="navbar-brand btn btn-link">
                                    <MdOutlineLogout onClick={() => [props.isLogout(),props.dashboardPage(false)]} style={{ fontSize: "40px" }} />
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