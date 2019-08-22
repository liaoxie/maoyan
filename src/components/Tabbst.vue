<template>
  <ul class="mz-tabbst">
    <li v-for="tab in tabs" :key="tab.id">
      <router-link :to="tab.href">
        <i class="iconfont" :class="[tab.icon]"></i>
        <span>{{tab.name}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabbst',
  props: {
    tabs: Array
  }
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
.mz-tabbst {
  position: relative;
  display: flex;
  height: 50px;
  box-sizing: border-box;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    content: "";
    height: 1px;
    background: #000;
    transform: scaleY(0.5);
  }
  li {
    flex: 1;
    list-style: none;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    &.router-link-active {
      color: red;
    }
  }
  .iconfont {
    font-size: 22px;
  }
}
</style>
