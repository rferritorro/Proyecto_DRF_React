import React, {Suspense} from "react";
const StationsAdmin = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/Dashboard/stations/StationComponentAdmin")), 1500)
    })
})
const StationsPageAdmin = () =>{
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="./lazy-loading.gif"/></div>}>
                <h1 className="text-center">PANEL DASHBOARD</h1>
                <StationsAdmin/>
        </Suspense>
        
    )
};

export default StationsPageAdmin;