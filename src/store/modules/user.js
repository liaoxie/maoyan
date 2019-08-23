import request from '../../utils/request'
import router from '../../router'
import { Toast } from 'vant'

let userInfo=localStorage.getItem('userInfo')
let token=localStorage.getItem('token')
export default {

  namespaced: true,
  state: {
    userInfo: userInfo?JSON.parse(userInfo):null,
    token: token||null
  },
  getters: {},
  mutations: {
    login (state, payload) {
      state.userInfo = payload.userInfo
      state.token = payload.token
    }
  },
  actions: {
    /**
         * 登录
         * **/
    mylogin ({ commit }, payload) {
      request.post('http://localhost:8080/api/nidetian', payload).then(res => {
        if (res.code === 0) {
          commit('login', {
            userInfo: res.data.userInfo,
            token: res.data.token
          })
          localStorage.setItem('userInfo',JSON.stringify( res.data.userInfo))
          localStorage.setItem('token',res.data.token)
          router.replace('./my')
        } else {
          
          Toast(res.msg)
        }
      })
    },
    myregist({commit},payload){
      request.post('http://localhost:8080/api/wodetian',payload).then(res=>{

      })
    },
    // quit (state){
    //   sessionStorage.clear();
    //   state.userInfo = {};
    //   state.token = null
    // },

  }
}
