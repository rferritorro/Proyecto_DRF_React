import http from "./http"

const IncidenceService = {
    getIncidences() {
        return http().get("/server/incidence")
    },
    putAnswerAdmin(data, id) {
        return http().put("/server/incidence/putAnswer/"+ id, data)
    }
}

export default IncidenceService;