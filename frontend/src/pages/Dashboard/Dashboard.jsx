import React, {Suspense, useEffect, useState} from "react";
import { useRent } from "../../hooks/useRent";
import { useIncidence } from "../../hooks/useIncidence";
const StationsAdmin = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Dashboard/stations/StationComponentAdmin")), 1500)
    })
})
const RentingAdmin = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Dashboard/RentingComponent")), 1500)
    })
})
const IncidenceAdmin = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Dashboard/IncidenceComponent")), 1500)
    })
})

const StationsPageAdmin = () =>{
    const {rent} = useRent()
    const {incidence} =  useIncidence()
    console.log(incidence)
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
                <h1 className="text-center">PANEL DASHBOARD</h1>
                <RentingAdmin rents={rent}/>
                <IncidenceAdmin incidence={incidence}/>
                <StationsAdmin rents={rent}/>
        </Suspense>
        
    )
};

export default StationsPageAdmin;