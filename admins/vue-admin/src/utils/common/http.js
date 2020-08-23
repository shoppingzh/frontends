import axios from 'axios'

const service = axios.create({
  baseURL: ''
})

service.interceptors.response.use(
  reponse => {
    return reponse.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
