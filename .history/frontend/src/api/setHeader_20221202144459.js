import axios from "axios"


export const setAuthHeader = (token) => {
    axios.defaults.headers.common["Authentication"] = token
}

export const clear