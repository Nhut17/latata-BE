import axios from "axios";



const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'X-Custom-Header': 'foobar'}
})

export default api