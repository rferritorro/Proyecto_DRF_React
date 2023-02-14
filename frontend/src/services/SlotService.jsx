import http from "./http"

const SlotService = {
    getAllSlots() {
        return http().get("/server/slots")
    },
}

export default SlotService;