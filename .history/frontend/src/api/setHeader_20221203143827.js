import axios from "axios"


export const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = token
}

export const clearAuthHeader = (token) => {

    delete axios.defaults.headers.common["Authorization"]

}