import request from '../../utils/request'
export default {
  namespaced: true,
  state: {
    cities: [] //存储全部的城市数据
  },
  getters: {
    cityList(state) {
      let result = []

      state.cities.forEach(item => {
        let py = item.pinyin.charAt(0).toUpperCase()

        let index = result.findIndex(a => a.py === py)

        if (index > -1) {

          result[index].list.push(item)
        } else {
          let obj = {
            py,
            list: [item]
          }
          result.push(obj)
        }
      })

      return result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },
    pys(state, getters) {
      return getters.cityList.map(item => item.py)
    },

    ltms(state) {
      let list = [];
      state.cities.forEach(item => {
        if (item.isHot == 1) {
          list.push(item.name)
        }
      })
      return list
    }
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities
    }
  },
  actions: {
    //获取城市列表数据
    getCities({
      commit
    }) {
      request.get('https://m.maizuo.com/gateway?k=8739415', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1566264479188978561367"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        console.log(res)
        if (res.status === 0) {
          commit({
            type: 'setCities',
            cities: res.data.cities
          })
        }
      })
    }
  }
}
