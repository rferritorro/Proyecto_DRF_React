import http from "./http"

const SlotService = {
    getAllSlots() {
        return http().get("/server/slots")
    },
    GetSlotsByStation(id) {
        return http().get("/server/slots/station/"+id)
    },
}

export default SlotService;