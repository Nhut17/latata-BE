import axios from "axios"


export const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authenrization"] = token
}

export const clearAuthHeader = (token) => {

    delete axios.defaults.headers.common["Authenrization"]

}