<template>
  <div>
      <p v-show="showTishi">{{tishi}}</p>
    <input type="text" placeholder="请输入您的手机号" class="aput"  />
    <input type="password" placeholder="设置密码" class="aput" />
    <br />
    <input type="checkbox" />我已阅读并同意
    <router-link to>美团网协议</router-link>
    <button class="aput" >注册</button>
  </div>
</template>



<style lang="scss">
.aput {
  width: 100%;
}
</style>