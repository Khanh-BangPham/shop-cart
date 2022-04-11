import axios from "axios";
import { authService } from "../services/authService";
import { getToken, setToken } from "../utils/token";

export const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})

api.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    if (error.response.status === 403) {
        const token = getToken()
        if (token) {
            const res = await authService.refreshToken({
                refreshToken: token.refreshToken
            })
            if (res.data) {
                token.accessToken = res.data.accessToken
                setToken(token)
            }

            return api(error.config)
        }

    }


    return error.response.data
})

api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }

    return config
})

export default api