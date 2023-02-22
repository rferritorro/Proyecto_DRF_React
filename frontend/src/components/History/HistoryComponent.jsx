import React, { useEffect, useState } from "react";
import './HistoryComponent.css'
import { useHistory } from "../../hooks/useHistory";
import { MdDoubleArrow } from "react-icons/md"

const HistoryComponent = () => {
    const {GetFullHistory, history} = useHistory();
    const {istoken, settoken} = useState(false)
    const [OneInfoHistory, SetOneInfoHistory] = useState(false);

    useEffect(() => {
        GetFullHistory({'token_user':localStorage.getItem('token')})
    }, [OneInfoHistory])
    
    const ShowInfoOfHistory = (OneHistoryInfo) => {
        SetOneInfoHistory(OneHistoryInfo)
    }
    return (
        
        <div className="w-100 vh-100 d-flex">

            <div className="w-25 h-100 p-3 d-flex flex-column overflow-scroll">
            {
                history
                ?
                    history.map((reserved) =>
                        <div className={`border m-2 border-dark w-100 p-3 ${reserved.state ? 'bg-success' : 'bg-secondary' }`} >
                            <div className="float-start">
                                <h5>Reserva realizada {reserved.date_reserved}</h5>
                            </div>
                            <button className="floa-end bg-danger p-1" onClick={() => ShowInfoOfHistory(reserved)}>View</button>
                        </div>
                    )
                :
                    <h1>No has hecho ninguna reserva</h1>
            }
            </div>
            <div className={`w-75 h-auto ${OneInfoHistory.slot_id_left ? '' : 'history-info' }`}>
                {
                    OneInfoHistory
                    ?
                    <div className={`d-flex flex-row p-5 ${OneInfoHistory.slot_id_left ? 'w-100' : 'w-75' }`}>
                        <div style={{width: "37.5%" }} className={`text-center ${OneInfoHistory.slot_id_left ? '' : 'w-100' }`}>
                            <h1>Start Station</h1>
                            <img  style={{width: "100%" }} src={OneInfoHistory.slot_id_rent.station_id.img} alt="" />
                            <table class="table table-striped mt-3 border border-dark">
                                <thead>
                                    <tr>
                                        <td>Street</td>
                                        <td>{OneInfoHistory.slot_id_rent.station_id.name}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Slot</td>
                                        <td>{OneInfoHistory.slot_id_rent.id}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {
                            OneInfoHistory.slot_id_left
                            ?
                            <div className="w-25 d-flex justify-content-center align-items-center">
                                <MdDoubleArrow style={{ fontSize: "35px" }}/>
                            </div>
                            :
                            null
                        }
                        <div style={{width: "37.5%" }} className="text-center">
                            {
                                OneInfoHistory.slot_id_left
                                ?
                                <div style={{width: "100%" }}>
                                    <h1>End Station</h1>  
                                    <img style={{width: "100%" }} src={OneInfoHistory.slot_id_left.station_id.img} alt="" />
                                    <table class="table table-striped mt-3 border border-dark">
                                        <thead>
                                            <tr>
                                                <td>Street</td>
                                                <td>{OneInfoHistory.slot_id_left.station_id.name}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Slot</td>
                                            <td>{OneInfoHistory.slot_id_left.id}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>

                    :
                    <img className="image-default" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/14/cd/caption.jpg?w=1200&h=-1&s=1" alt=""/>
                }
            </div>
        </div>
    )
}

export default HistoryComponent;