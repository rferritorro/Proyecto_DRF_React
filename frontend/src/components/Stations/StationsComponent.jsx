import React, {Suspense} from "react";
import './StationsComponent.css'
import { useStation } from "../../hooks/useStation";
import { useEffect, useState } from "react";

const MapBox = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../MapBox/MapBoxComponent")), 1500)
    })
})

const StationComponent = () => {
    const [token_bike, Settoken_bike] = useState()
    const stations = useStation();

    useEffect(() => {
        Settoken_bike(localStorage.getItem('token_bike'))
    },[localStorage.getItem('token_bike')])

    return (
        <div className="stationComponent d-flex align-items-center flex-column">
            <Suspense fallback={
                <div className="text-center lazy-load">
                    <img className="w-25" src="./lazy-loading.gif"/>
                </div>
            }>
                {
                    token_bike
                    ?
                        <div className="w-50 bg-success text-center border rounded-5">
                            <h3>You are riding now!!</h3>
                        </div>
                    :
                        null
                }
                <MapBox data={stations?.station}/>
            </Suspense>
        </div>
    )
};

export default StationComponent