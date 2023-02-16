import http from "./http"

const RentingService = {
    setRenting(data) {
        return http().post("/server/rentingadd",data)
    },
    LeaveRenting(data) {
        return http().post("/server/rentingleave",data)
    }
}

export default RentingService;