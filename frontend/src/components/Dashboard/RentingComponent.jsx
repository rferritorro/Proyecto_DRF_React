import React from "react";
import "./dashboard.css"

const RentingComponent = (props) => {
    return (
        <div className="m-5">
            <h3 className="text-center text-primary"><u>RENTS</u></h3><p></p>
            <table className="table table-striped p-3 table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="rent">Id_Rent</th>
                        <th scope="col" className="user">User</th>
                        <th scope="col" className="stat">Station</th>
                        <th scope="col" className="slot">Slot</th>
                        <th scope="col" className="bik">Bike</th>
                        <th scope="col" className="dat">Date</th>
                    </tr>
                </thead>
            </table>
            <div class="tbl-header">
                <table className="table table-striped p-3 table-bordered table-hover">
                    <tbody>
                            {props.rents?.map((data, index) => (
                                // <tr className={`${!data.slot_id.state ? "bg-warning": ""} `}>
                                <tr>
                                    <td scope="row" className="rent">{data.id}</td>
                                    <td className="user">{data.user_id.username} </td>
                                    <td className="stat">{data.station_id.name}</td>
                                    <td className="slot">{data.slot_id.id}</td>
                                    <td className="bik">{data.bike_id.id}</td>
                                    <td>{data.date}</td>
                                </tr>    
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RentingComponent