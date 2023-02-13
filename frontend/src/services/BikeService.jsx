import http from "./http"

const BikeService = {
    getBike() {
        return http().get("/server/bike")
    },
}

export default BikeService;