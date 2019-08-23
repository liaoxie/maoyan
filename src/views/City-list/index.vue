<template>
  <div class="page-city">
    <div class="header">
      <div class="h-left" @click="onClickLift">返回</div>
      <div class="h-right">城市列表</div>
    </div>

    <form class="from">
      <input type="text" class="txt" placeholder="请输入关键字" v-model="value" />
    </form>

    <!-- 内容城市区 -->
    <div class="wap">
      <div class="wap-left" ref="myBox">
        <div class="hot-ciry">
          <p class="city-title">热门城市</p>
          <ul>
            <li class="city-item" v-for="item in ltms" :key="item">{{item}}</li>
          </ul>
        </div>

        <!--------------------- 城市  ------>
        <ul class="city-list">
          <li
            :ref="'item-'+item.py"
            class="city-list__item"
            v-for="item in cityList"
            :key="item.py"
          >
            <p class="item-title">{{item.py}}</p>
            <ul>
              <li v-for="city in item.list" :key="city.cityId">{{city.name}}</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- A B C D E F G -->
      <div class="wap-right">
        <ul>
          <li v-for="item in pys" :key="item" @click="onPy(item)">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "City-List",
  data() {
    return {
      value: ""
    };
  },
  computed: {
    ...mapGetters("city", ["cityList", "pys", "ltms"])
  },
  methods: {
    ...mapActions("city", ["getCities"]),
    onClickLift() {
      this.$router.back();
    },
    onPy(py) {
      // 1.获取 我点的是啥
      let itemBox = this.$refs[`item-${py}`][0];
      let offsetTop = itemBox.offsetTop - 100;
      this.$refs["myBox"].scrollTop = offsetTop;
    }
  },
  created() {
    this.getCities();
  }
};
</script>


<style scoped lang='scss'>
.page-city {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 50px;
    background: red;
    width: 100%;
    display: -webkit-box;
    .h-left {
      display: flex;
      height: 100%;
      width: 70px;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: beige;
    }
    .h-right {
      display: flex;
      flex: 1;
      padding-right: 60px;
      font-size: 26px;
      justify-content: center;
      align-items: center;
    }
  }

  .from {
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    .txt {
      width: 80%;
      height: 30px;
      border: 1px solid #ccc;
    }
  }

  .wap {
    display: flex;
    flex: 1;
    width: 100%;
    overflow: hidden;
    .wap-left {
      display: flex;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      flex-direction: column;

      .hot-ciry {
        width: 100%;
        padding: 10px;
        .city-title {
          font-size: 12px;
          color: #ccc;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          li {
            width: 100px;
            height: 30px;
            line-height: 30px;
            border-radius: 2px;
            text-align: center;
            background: #f4f4f4;
            margin: 10px 5px;
          }
        }
      }
    }

    .city-list__item {
      .item-title {
        background: #f4f4f4;
        color: #797d82;
        padding: 0 0 0 15px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
      }
      ul {
        padding-left: 20px;
      }
      li {
        // @include border-bottom;
        height: 48px;
        width: 100%;
        color: #191a1b;
        line-height: 48px;
      }
    }
    .wap-right {
      width: 20px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      ul {
        width: 100%;
        li {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
