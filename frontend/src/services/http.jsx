import axios from "axios"

export default function http() {
    return axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
            "Content-type": "application/json",
        }
    });
}