import { useEffect, useCallback, useState } from "react";
import SlotService from "../services/SlotService";

export function useSlot() {
    const [slot, setSlot] = useState();
    const [slotsbystation, setSlotByStation] = useState();

    useEffect(() => {
        SlotService.getAllSlots()
        .then(({data}) => {
            setSlot(data)
        })
    }, [])
    const GetSlotsByStation = (id) => {
        SlotService.GetSlotsByStation(id)
        .then(({data}) => {
            setSlotByStation(data)
        })
    }
    return {    
        slots: slot, slotsbystation ,GetSlotsByStation
    }
}