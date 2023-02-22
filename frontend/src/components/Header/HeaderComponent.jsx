import React, {useContext} from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineLogout, MdNotificationsActive} from 'react-icons/md'
import {IoMdNotifications} from 'react-icons/io'
import {CgMenuGridR} from 'react-icons/cg'
import IncidenceContext from "../../context/IncidenceContext";
import NotificationContext from "../../context/NotificationContext"
import jwt_decode from "jwt-decode"

const HeaderComponent = (props) => {
    const {checkIncidence} = useContext(IncidenceContext)
    const {checkNotificationContext} = useContext(NotificationContext)
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${props.dashPage ? "bg-dark": "bg-light"}`}>
                <Link to={"/"} className="navbar-brand">
                        <img className="logo-header " src="/logo_biosbike.png" onClick={() => props.dashboardPage(false)}/>
                </Link>
                <button className="navbar-toggler button-navbar" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <CgMenuGridR className={`iconAlert ${props.dashPage ? "iconAlertWhite" : ""}`} />
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
                                        <strong onClick={() => [props.dashboardPage(true), checkIncidence()]} className={`h2 ${props.dashPage ? "text-success": "text-primary"}`}>Admin</strong>
                                </Link>:
                                <li></li>
                            }
                        </li>
                    </ul>
                    {
                        props.isToken ?
                                <ul className="navbar-nav ">
                                    <li className={`navbar-brand userLoged ${props.dashPage ? "" : "bg-primary"}`}>   
                                        <Link to={"/profile"}>
                                            <img className="btn btn-link avatar" src={props.userData?.profile_id[0].avatar} />
                                        </Link>
                                        <Link to={"/notifications"}>
                                            <button className="navbar-brand btn btn-link" onClick={() => checkNotificationContext(jwt_decode(props.isToken).id)}>
                                                {
                                                    props.notification.length != 0 ?
                                                    <MdNotificationsActive className={`iconAlert ${props.dashPage ? "iconAlertWhite" : ""}`} />:
                                                    <IoMdNotifications className={`iconAlert ${props.dashPage ? "iconAlertWhite" : ""}`} />
                                                }
                                            </button>
                                        </Link>
                                        <button className="navbar-brand btn btn-link">
                                            <MdOutlineLogout onClick={() => [props.isLogout(),props.dashboardPage(false)]} className={`iconAlert ${props.dashPage ? "iconAlertWhite" : ""}`} />
                                        </button>
                                    </li>
                                </ul>
                            :
                            <button className="navbar-brand btn btn-link">
                                <FaUserCircle onClick={() => props.isLogin()} className="defaultUser" />
                            </button>
                    }  
                </div>
                          
                
            </nav>
    )
};

export default HeaderComponent