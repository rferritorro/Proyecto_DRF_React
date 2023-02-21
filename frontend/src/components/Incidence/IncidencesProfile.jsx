import React, { useEffect, useState, useContext } from "react";
import IncidenceContext from "../../context/IncidenceContext";

const IncidenceProfile = () => {
    const {incidenceProfile} = useContext(IncidenceContext)
    console.log(incidenceProfile)
    return (
        <div className="m-5">
            <h1 className="text-primary text-center">Your Incidences</h1><p></p>
            <div className="d-flex flex-column">
            {
                incidenceProfile?.map((data, index) => (
                    <div className={`${data.answer ? "bg-success": "bg-warning"} m-5 p-4 d-flex flex-row`}>
                        <div>
                            <ul>
                                <li><strong>Description of Incidence:</strong></li><p></p>
                                <li><strong>Answer of Administrator:</strong></li><p></p>
                                <li><strong>State:</strong></li>
                            </ul>
                        </div>
                        <div>
                            <p>&nbsp;{data.description}</p>
                            <p>&nbsp;{data.answer}</p>
                            {
                                data.state == 0 ?
                                <p>Pending</p>:
                                <p>Accepted</p>
                            }
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default IncidenceProfile;