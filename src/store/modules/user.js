import request from '../../utils/request'

export default {
    namespaced: true,
    state: {
        userInfo: null
    },
    getters: {},
    mutations: {},
    actions: {
        /** 
         * 登录
         * **/
        mylogin({ commit }, payload) {
            request.post('http://localhost:8080/api/nidetian',payload).then(res=>{

            })
        }
    }
}