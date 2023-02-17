import { useEffect, useCallback, useState } from "react";
import RentService from "../services/RentService";

export function useRent() {
    const [rent, setRents] = useState();
    useEffect(function () {
        RentService.getRents()
        .then(({data}) => {
            setRents(data)
        })
    }, [setRents])

    return {
        rent
    }
}