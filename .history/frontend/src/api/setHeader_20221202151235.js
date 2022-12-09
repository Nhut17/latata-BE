import axios from "axios"


export const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authen"] = token
}

export const clearAuthHeader = (token) => {

    delete axios.defaults.headers.common["Authen"]

}