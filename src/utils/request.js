<<<<<<< HEAD
// 1.引入axios
import axios from 'axios'

// 2.创建一个axios的实例对象
const request = axios.create({
  baseURL: 'http://localhost:3000'
})
// 3.在这可以实现一些拦截功能
// 3.1响应拦截
// 3.1.1直接将response.data给返回出去，方便调用.data
request.interceptors.response.use(response => {
  return response.data
})
=======
// 基于 axios 做的一个封装，用来实现网络请求工具

// 1. 引入 axios
import axios from 'axios'
import {
  Toast
} from 'vant'

// 2. 创建一个 axios 的实例对象
const request = axios.create({
  // 默认配置项
  //   baseURL: 'http://m.maoyan.com'
})

// 3. 在这还可以实现一些我们的拦截功能

// 3.1 响应拦截
//    3.1.1 直接将 response.data 给返回出去，以方便外面调用时还得 .data
request.interceptors.response.use(
  response => {
    // 请求成功，将 reponse.data 直接返回出去
    return response.data
  },
  error => {
    // 请求出现异常，直接 Toast 一个网络异常
    // console.log(1)
    Toast('网络异常，请稍后重试')

    return Promise.reject(error)
  }
)

// 4. 将 实例暴露出去，
>>>>>>> feature/hebing
export default request
