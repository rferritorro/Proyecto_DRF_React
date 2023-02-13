import { useEffect, useCallback, useState } from "react";
import SlotService from "../services/SlotService";

export function useSlot() {
    const [slot, setSlot] = useState();
    useEffect(function () {
        SlotService.getAllSlots()
        .then(({data}) => {
            setSlot(data)
        })
    }, [setSlot])

    return {
        slots: slot
    }
}