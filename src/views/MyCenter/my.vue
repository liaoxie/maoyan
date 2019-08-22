<template>
  <div>
    <div class="myhead">我的</div>
    <div class="didu">
      <div v-if="userInfo">
        <img class="moren" :src="userInfo.avatar" />
        <div class="catname">{{ userInfo.username }}</div>
        <router-link to="/mycenter">切换用户</router-link> 
      </div>
      <div v-else>
        <img
          class="moren"
          src="http://img1.imgtn.bdimg.com/it/u=1864942380,1660582897&fm=26&gp=0.jpg"
        />
       
      </div>
    </div>
    <div class="buy">
      <div class="buyone">
        <div class="mydd">———我的订单———</div>
        <div class="twotb">
          <router-link to="/cart" class="cart" tag="span">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566454061083&di=7113e263e7c0065354e1d0f83eed9655&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F35%2F32%2F58119a8584f24_610.jpg"
              alt
            />
            <span>商城</span>
          </router-link>
          <router-link to="/filmstar" class="cart" tag="span">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566453941946&di=878e58d3a61c4767c16cdfd9b1692bad&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2F2014%2F0808%2FU10753P115DT20140808151838.jpeg"
              alt
            />
            <span>电影</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="kanqilai">
      <div class="yimoyiyang">
        <span>在线观影</span>
        <span>></span>
      </div>
      <div class="yimoyiyang">
        <span>优惠卷</span>
        <span>></span>
      </div>
      <div class="yimoyiyang">
        <span>折扣卡</span>
        <span>></span>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods:{
//     quit(){
//      	var vm = this
// 				vm.msg = ''
// var logoutUrl='http://localhost:8080/api/nidetian'
// 			$.ajax({

// 				url: vm.logoutUrl,
// 				type: 'POST',
// 				dataType: 'json',
// 				success: function(data) {
					
// 					vm.msg = '注销成功！'
// 					vm.userName = ''
// 					vm.data.userName = ''
// 					vm.data.password = ''
					
// 					localStorage.removeItem('userInfo')
// 				localStorage.removeItem('token')
// 				},
// 				error: vm.requestError
// 			})
// 		},
    }
  
}
</script>



<style lang="scss">
.myhead {
  text-align: center;
  background: #e54847;
  height: 40px;
  line-height: 40px;
  color: white;
}
.didu {
  background: #f03d37;
  height: 150px;
  overflow: hidden;
  text-align: center;
  border-bottom: 10px solid #f3f3f3;
}
.moren {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 30px;
}
.buy {
  height: 150px;
  background: white;
  display: flex;
  border-bottom: 10px solid #f3f3f3;
}
.buyone {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
}
.mydd {
  margin: 0 auto;
}
.twotb {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
.cart {
  width: 50px;
  box-sizing: border-box;
  img {
    width: 40px;
  }
  text-align: center;
}
.kanqilai {
  border-bottom: 10px solid #f3f3f3;
}
.yimoyiyang {
  margin-left: 10%;
  width: 80%;
  border-bottom: 1px solid #e6e5e5;
  display: flex;
  justify-content: space-between;
  height: 36px;
  line-height: 36px;
}
</style>