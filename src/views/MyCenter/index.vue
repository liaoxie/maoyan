<template>
  <div class="whatfock">
    <div class="hengtiao">
      <div class="houtui" @click="houtuiback()">《一</div>猫眼电影
    </div>
    <van-tabs v-model="active">
      <van-tab title="美团账号登录">
        <input type="text" placeholder="账号名" class="fock" v-model="username" />
        <input type="password" placeholder="请输入密码" class="fock" v-model="password" />
        <!-- <p class="waring" v-show="xianxian">*账号或者密码输入错误</p> -->
        <button class="btn1" v-on:click="mylogin({username,password})">登录</button>

        <router-view></router-view>
      </van-tab>
      <van-tab title="手机账号登录">
        <template>
          <div class="rightleft">
            <input
              type="number"
              placeholder="请输入手机号"
              class="phmh"
              @change="changeCss(phumname)"
              v-model="phumname"
            />
            <input
              type="password"
              placeholder="请输入密码"
              class="yzm"
              :disabled="!phumname"
              v-model="phumpassword"
            />
            <button class="btn3" :disabled="!phumname">登录</button>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <template>
      <div class="leftright">
        <router-link to="/regist">立即注册</router-link>
        <router-link to>忘记密码</router-link>
      </div>
      <div class="dianhua">
        © 猫眼电影 客服电话：
        <i>400-670-5335</i>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
import { setCookie, getCookie } from "../../assets/js/cookie.js";
export default {
  data() {
    return {
      active: 2,
      index: 1,
      isDisable: true,
      amount: Number,
      username: "",
      password: "",
      phumname: "",
      xianxian: false,
      phumpassword: ""
    };
  },
  methods: {
    houtuiback() {
      this.$router.go(-1);
    },
    changeCss(val) {
      var chenkPhone = /^(0|86)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (chenkPhone.test(val) === true) {
        this.isDisable = false;
      } else {
        this.isDisable = true;
      }
    },
    ...mapActions("user", ["mylogin"])
    // ,
    // login() {
    //   if (this.username == "" || this.password == "") {
    //     alert("请输入用户名或密码");
    //   } else {
    //     let data = { username: this.username, password: this.password };
    //     /*接口请求*/
    //     this.$http
    //       .post("baidu.com", data)
    //       .then(res => {
    //         console.log(res);
    //         /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
    //         if (res.data == -1) {
    //           this.tishi = "该用户不存在";
    //           this.showTishi = true;
    //         } else if (res.data == 0) {
    //           this.tishi = "密码输入错误";
    //           this.showTishi = true;
    //         } else if (res.data == "admin") {
    //           /*路由跳转this.$router.push*/
    //           this.$router.push("/main");
    //         } else {
    //           this.tishi = "登录成功";
    //           this.showTishi = true;
    //           setCookie("username", this.username, 1000 * 60);
    //           setTimeout(
    //             function() {
    //               this.$router.push("/movie");
    //             }.bind(this),
    //             1000
    //           );
    //         }
    //       });
    //   }
    // }
  }
};
</script>

<style lang="scss">
.waring {
  color: red;
}
.fock {
  width: 100%;
  height: 36px;
  border: none;
  border-bottom: 1px solid;
}
.bbab {
  display: inline-block;
}
a {
  text-decoration: none;
  color: orange;
}
.whatfock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.van-tab {
  width: 50%;
  display: inline-block;
}
.van-tabs__wrap {
  text-align: center;
  border-bottom: 8px solid #d6d6d6;
}
.btn1 {
  width: 100%;
  background: #df2d2d;
  color: white;
  margin-top: 10px;
  height: 36px;
}
.leftright {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.phmh {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  margin-top: 5px;
  height: 36px;
}
.yzm {
  width: 100%;
  border: none;
  height: 36px;
}
.rightleft {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.btn3 {
  width: 100%;
  margin-top: 10px;
  height: 36px;
}
.hengtiao {
  height: 50px;
  background: #df2d2d;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: white;
  position: relative;
}
.houtui {
  position: absolute;
  left: 0;
  color: white;
}
.dianhua {
  margin-top: 30px;
  text-align: center;
}
</style>
