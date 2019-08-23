import request from "../../utils/request";

export default {
  namespaced: true,
  state: {
    topfimList: [],
    filmlist: [],
    movieIds: []
  },

  getters: {
    totalPage(state) {
      return Math.ceil(state.movieIds.length / 10) + 1;
    }
  },

  mutations: {
    setFimList(state, payload) {
      //第一种方式做拼接
      state.filmlist = payload.films;
      // 第二种方式做拼接

      // state.filmlist.push(...payload.films)
      // state.total = payload.total
    },
    setMovieIds(state, payload) {
      state.movieIds = payload;
    }
  },

  actions: {
    //获取影片数据
    gitFimList({
      commit,
      state
    }, payload) {
      if (payload.pageNum === 1) {
        //第一次请求
        request
          .get("ajax/movieOnInfoList?", {
            params: {
              token: ""
            }
          })
          .then(res => {
            console.log(res);
            //将 res.movieList 放到state.filmlist 李去
            commit("setFimList", {
              films: res.movieList
            });
            commit("setMovieIds", res.movieIds.splice(12));

            //end 调用 callback 回调函数
            payload.callback();
          });
      } else {
        let curNum = payload.pageNum - 1;
        //后面页
        request
          .get("ajax/comingList?", {
            params: {
              token: "",
              movieIds: state.movieIds
                .slice((curNum - 1) * 10, 10 * curNum)
                .join(",")
            }
          })
          .then(res => {
            console.log(res);
            // 将 res.coming 追加到state.filmList
            commit("setFimList", {
              films: state.filmlist.concat(res.coming)
            });
            //end  回调
            payload.callback();
          });
      }
    },

    gettopfimList({
      state
    }) {
      request.get('ajax/mostExpected?', {
        params: {
          ci: 319,
          limit: 10,
          offset: 0,
          token: 'Atp3U3pbVKaS2pddO9JjFEXnGX0AAAAA5AgAAPevCZfXDKaX4mHXNE_rkiy4lmRzUiXJ7KBqbb9M483iQlF80645a56YqN6vd6zZqQ'
        }
      }).then(res => {
        state.topfimList = res.coming
      })
    }

  }
};
