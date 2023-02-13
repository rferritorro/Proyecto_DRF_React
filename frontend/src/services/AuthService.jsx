import http from "./http"

const AuthService = {
    loginUser(data) {
        return http().post("/server/userlogin", data)
    },
    registerUser(data) {
        return http().post("/server/useradd", data)
    },
    getProfile(id) {
        return http().get("/server/profile"+ id)
    },
    isAdmin(id) {
        return http().get("/server/useradmin/"+ id)
    }
}

export default AuthService;