import http from "./http"

const AuthService = {
    loginUser(data) {
        return http().post("/server/userlogin", data)
    },
    registerUser(data) {
        return http().post("/server/useradd", data)
    },
}

export default AuthService;