import React, {Suspense} from "react";
import './StationsComponent.css'
import { useStation } from "../../hooks/useStation";
const MapBox = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../MapBox/MapBoxComponent")), 1500)
    })
})

const StationComponent = () => {
    const stations = useStation();
    return (
        <div className="stationComponent">
            <h1 className="text-center">STATIONS</h1>
            <Suspense fallback={<div className="text-center lazy-load"><img className="w-25" src="./lazy-loading.gif"/></div>}>
                <MapBox data={stations?.station}/>
            </Suspense>
        </div>
    )
};

export default StationComponent