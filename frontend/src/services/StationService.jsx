import http from "./http"

const StationService = {
    getStation() {
        return http().get("/server/station")
    },
    addStation(data) {
        return http().post("/server/station_add", data)
    },
    deleteStation(id) {
        return http().delete("/server/station_delete/" + id)
    }
}

export default StationService;