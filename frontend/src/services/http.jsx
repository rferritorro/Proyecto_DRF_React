import axios from "axios"

export default function http() {
    return axios.create({
        baseURL: "http://192.168.1.26:8000/",
        //baseURL: "http://192.168.1.51:8000/",
        //baseURL: "http://localhost:8000/",
        headers: {
            "Content-type": "application/json",
        }
    });
}