import http from "./http"

const AuthService = {
    loginUser(data) {
        return http().post("/server/userlogin", data)
    },
    registerUser(data) {
        return http().post("/server/useradd", data)
    },
    getProfile(id) {
        return http().get("/server/user/"+ id)
    },
    isAdmin(id) {
        return http().get("/server/user/admin/"+ id)
    },
    updateUser(data, id) {
        return http().put("/server/user/update/"+ id, data)
    }
}

export default AuthService;