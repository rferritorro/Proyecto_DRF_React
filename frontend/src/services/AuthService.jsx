import http from "./http"

const AuthService = {
    loginUser(data) {
        return http().get("/server/userlogin" + data)
    },
}

export default AuthService;