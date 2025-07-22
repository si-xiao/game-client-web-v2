import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// 请求拦截器
api.interceptors.request.use(config => {
    // 可在此处添加认证token等
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
api.interceptors.response.use(response => {
    return response.data
}, error => {
    // 统一错误处理
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
})

export default api