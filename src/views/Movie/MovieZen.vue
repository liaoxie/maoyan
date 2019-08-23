<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in topfimList" :key="item.id">
          <img :src="item.img | fromatImg" alt />
          <p class="top">{{item.nm}}</p>
          <p class="bottom">{{item.comingTitle}}</p>
        </div>
      </div>
    </div>
    <name></name>
  </div>
</template>


<script>
import name from "./MovieRei";
import { mapActions, mapState } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "MovieZen",
  filters: {
    fromatImg(value) {
      return value.replace("w.h", "182.180");
    }
  },
  components: {
    name
  },
  computed: {
    ...mapState("film", ["topfimList"])
  },
  methods: {
    ...mapActions("film", ["gettopfimList"]),
    //初始化 swiper
    initSwiper() {
      new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  },
  created() {
    this.gettopfimList();
  },

  updated() {
    this.initSwiper();
  }
};
</script>


<style scoped lang='scss'>
.swiper-container[data-v-372c15a8] {
  width: 100%;
  height: 230px;
}
.swiper-container {
  .swiper-wrapper {
    height: 100%;
  }
  width: 100%;
  height: 300px;
  .swiper-slide {
    margin-top: 0;
    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    color: #000;
    line-height: 30px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .bottom {
    font-size: 12px;
    color: #999;
    line-height: 18px;
  }
  img {
    width: 90%;
    height: 155px;
    border: 1px solid #000;
  }
}
</style>
