import axios from "axios"
import api from "./api"


export const setAuthHeader = (token) => {

    axios.defaults.headers.common["Authorization"] = 'Bearer ' + token
    consol
}

export const clearAuthHeader = (token) => {

    delete api.defaults.headers.common["Authorization"]

}