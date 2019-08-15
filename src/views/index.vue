<template>
  <div class="page-index">
    <router-view></router-view>
    <Tabbast :tabs="tabs" />
  </div>
</template>

<script>
import Tabbast from "../components/Tabbst.vue";
export default {
  name: "index",

  components: {
    Tabbast
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "电影",
          icon: "icondianying",
          href: "/movie"
        },
        {
          id: 2,
          name: "影院",
          icon: "iconyingyuana",
          href: "/cinema"
        },
        {
          id: 3,
          name: "我的",
          icon: "iconwode",
          href: "/mycenter"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.page-index {
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:first-child {
    flex: 1;
  }
}
</style>

