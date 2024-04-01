import axios from 'axios'
const baseUrl =import.meta.env.VITE_BACKEND_URL
export const axiosClient = axios.create({
    baseURL:baseUrl+'/api',
    withCredentials:true
})