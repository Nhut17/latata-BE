import axios from "axios"
import api from "./api"


export const setAuthHeader = (token) => {
    api.defaults.headers.common['Authorization'] = token
    console.log(token)
}

export const clearAuthHeader = (token) => {

    delete api.defaults.headers.common["Authorization"]

}