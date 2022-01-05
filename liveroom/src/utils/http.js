import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/suite' : '/suite',
  timeout: 60000
})

service.interceptors.response.use((resp) => {
  return resp
}, (err) => {
  Message.error('服务器错误，请稍后重试。')
  return Promise.reject(err)
})

export default service
