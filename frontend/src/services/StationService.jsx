import http from "./http"

const StationService = {
    getStation() {
        return http().get("/server/station")
    },
    addStation(data) {
        return http().post("/server/station_add", data)
    }
}

export default StationService;