import axios from "axios"


export const setAuthHeader = (token) => {
    api.defaults.headers.common["Authorization"] = token
}

export const clearAuthHeader = (token) => {

    delete axios.defaults.headers.common["Authorization"]

}