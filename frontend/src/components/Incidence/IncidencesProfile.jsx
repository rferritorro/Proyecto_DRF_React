import React, { useEffect, useState, useContext } from "react";
import IncidenceContext from "../../context/IncidenceContext";
import "../Profile/ProfileComponent.css"

const IncidenceProfile = () => {
    const {incidenceProfile} = useContext(IncidenceContext)
    console.log(incidenceProfile)
    return (
        <div className="m-5">
            <h1 className="text-primary text-center">Your Incidences</h1><p></p>
            <div className="d-flex flex-column">
            {
                incidenceProfile?.map((data, index) => (
                    <div className={`${data.answer ? "bg-success": "bg-warning"} divIncidences`}>
                        <div>
                            <ul>
                                <li><strong>Description of Incidence: </strong>&nbsp;{data.description}</li><p></p>
                                <li><strong>Answer of Administrator: </strong>&nbsp;{data.answer}</li><p></p>
                                <li><strong>State: </strong>{
                                    data.state == 0 ?
                                        <span>Pending</span> :
                                        <span>Accepted</span>
                                }</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default IncidenceProfile;