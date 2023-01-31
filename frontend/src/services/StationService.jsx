import http from "./http"

const StationService = {
    getStation() {
        return http().get("/server/station")
    }
}

export default StationService;