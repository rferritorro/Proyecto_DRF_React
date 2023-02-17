import http from "./http"

const RentService = {
    getRents() {
        return http().get("/server/renting")
    },
}

export default RentService;