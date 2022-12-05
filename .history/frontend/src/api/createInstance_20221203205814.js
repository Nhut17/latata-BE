import axios from "axios"
import jwt_decode from 'jwt-decode'
const axiosJWT = axios.create()

export const createAxios = () => {

  const { currentUser} = useSelector(state => state.user)

  
    const newInstance = axios.create()
    axiosJWT.interceptors.request.use(
        async(config) => {
          const date = new Date()
          const decodeToken = jwt_decode(currentUser.accessToken)
          if(decodeToken.exp <  date.getTime() / 1000)
          {
            const data = await refreshToken()
            const refreshUser = {
              ...currentUser,
              token: data.accessToken 
            };
            config.headers['token'] = "Bearer " + data.accessToken
          }
           return config
        },
        (err) => {
          return Promise.reject(err);
        }
      )
}