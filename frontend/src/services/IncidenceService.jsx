import http from "./http"

const IncidenceService = {
    getIncidences() {
        return http().get("/server/incidence")
    },
    getIncidencesProfile(id) {
        return http().get("/server/incidence/getProfile/" + id)
    },
    createIncidence(data) {
        return http().post("/server/incidence/add", data)
    },
    putAnswerAdmin(data, id) {
        return http().put("/server/incidence/putAnswer/"+ id, data)
    }
}

export default IncidenceService;