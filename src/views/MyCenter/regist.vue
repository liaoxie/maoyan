<template>
  <div>
<div class="hengtiao">
   <div class="houtui" @click="houtuiback()">《一</div>
  猫眼电影</div>
    <input type="text" placeholder="请输入您的手机号" class="aput"   v-model="username"/>
    <input type="password" placeholder="设置密码" class="aput"  v-model="password"/>
    <br />
    <input type="checkbox" v-model="checkboxone" />我已阅读并同意
    <router-link to="">美团网协议</router-link>
    <button class="aput" :disabled='!checkboxone' @click="register()">注册</button>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data(){
    return{
      username:"",
      password:"",
      checkboxone:true,
    }
  },
  methods:{
    //...mapActions('user', ['mylogin'])
    houtuiback(){
 this.$router.go(-1)
    },
 register(){
    if(this.username == "" || this.password == ""){
        alert("请输入用户名或密码")
    }else{
        let data = {'username':this.username,'password':this.password}
        this.$http.post('http://localhost:8080/api/wodetian',data).then((res)=>{
            console.log(res)
            if(res.data.code===0){
              Toast(res.data.msg)
            }
            if(res.data.code===1){
               Toast(res.data.msg)
            }
            if(res.data.code===-1){
              Toast(res.data.msg)
            }
        })
    }
}
  }
}
</script>


<style lang="scss">
.aput {
  width: 100%;
  height:36px;
}
.hengtiao{
  height:50px;
  background: #df2d2d;
  text-align: center;
  line-height: 50px;
  font-size:25px;
  color: white;
  position: relative;
}
.houtui{position: absolute;left:0;color:white}
</style>
