import http from "./http"

const HistoryService = {
    AllHistoryByUser(data) {
        return http().post("/server/history",data)
    },
}

export default HistoryService;