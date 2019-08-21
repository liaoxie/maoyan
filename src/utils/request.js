//1.引入axios
import axios from 'axios'

//2.创建一个axios的实例对象
const request=axios.create({
    baseURL:'http://localhost:3000'
})
//3.在这可以实现一些拦截功能
//3.1响应拦截
//3.1.1直接将response.data给返回出去，方便调用.data
request.interceptors.response.use(response=>{
    return response.data
})
export default request