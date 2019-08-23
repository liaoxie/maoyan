<template>
  <div class="page-movie">
    <header class="header" ref="myHader">
      <h1>猫眼电影</h1>
    </header>

    <!-- 分页 -->
    <div class="boxList" :class="{'z-fixed':isFixed}">
      <div class="city-entry">
        <router-link :to="'/city-List'">
          <span>深圳</span>
        </router-link>
        <i></i>
      </div>

      <div class="switch-hot">
        <div class="hot-item" v-for="item in movieList" :key="item.id">
          <router-link :to="item.href">{{item.name}}</router-link>
        </div>
      </div>
      <div class="search-entry search-icon"></div>
    </div>

    <!-- 电影列表 -->

    <router-view></router-view>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {}
=======
export default {
  name: "Movie",
  data() {
    return {
      isFixed: false,
      movieList: [
        {
          id: 1,
          name: "正在热映",
          href: "/movie/1"
        },
        {
          id: 2,
          name: "即将上映",
          href: "/movie/2"
        }
      ]
    };
  },
  methods: {
    Scroll() {
      if (this.$el.scrollTop >= 50) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  mounted() {
    this.$el.addEventListener("scroll", this.Scroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.Scroll);
  }
};
>>>>>>> feature/hebing
</script>



<style lang="scss" scoped>
.page-movie {
  overflow-y: auto;
  overflow-x: hidden;

  .header {
    width: 100%;
    text-align: center;
    line-height: 50px;
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
  }
  .boxList {
    background: #fff;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    height: 44px;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .router-link-active {
      display: block;
      height: 100%;
      border-bottom: 1px solid red;
    }
    .city-entry {
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
        max-width: 19.2vw;
      }
      i {
        margin-right: 5px;
        width: 0;
        height: 0;
        border: 4px solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: 4px;
        margin-top: 5px;
      }
    }
    .switch-hot {
      display: -webkit-box;
      display: flex;
      height: 44px;
      line-height: 44px;
      position: relative;
      .hot-item {
        font-size: 15px;
        color: #666;
        width: 80px;
        width: 21.33333vw;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
      }
      .hot-item.active {
        color: #ef4238;
        border-bottom: 1px solid #ef4238;
      }
    }

    .search-icon {
      width: 20px;
      height: 20px;
      background: url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/img/camera_new_5606e8f.png)
        3px 13px no-repeat;
      background-size: 20px;
      padding: 10px 15px 10px 10px;
    }
  }
  .z-fixed {
    position: fixed;
    z-index: 9999;
    width: 100%;
    top: 0;
  }
}
</style>
