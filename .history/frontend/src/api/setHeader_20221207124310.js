import axios from "axios"
import api from "./api"


export const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = token
}

export const clearAuthHeader = (token) => {

    delete axios.defaults.headers.common["Authorization"]

}