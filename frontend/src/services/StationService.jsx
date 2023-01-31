import http from "./http"

const StationService = {
    getStation() {
        return http().get("/server/stations")
    }
}

export default StationService;