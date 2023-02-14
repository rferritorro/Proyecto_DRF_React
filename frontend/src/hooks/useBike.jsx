import { useEffect, useCallback, useState } from "react";
import BikeService from "../services/BikeService";

export function useBike() {
    const [bike, setBike] = useState();
    useEffect(function () {
        BikeService.getBike()
        .then(({data}) => {
            setBike(data)
        })
    }, [setBike])

    return {
        bike: bike
    }
}