<template>
  <van-list :finished="finished" finished-text="没了" v-model="loding" @load="loadFilmList">
    <div class="move-list">
      <!-- 电影内容 ------ -->
      <ul>
        <li v-for="item in filmlist" :key="item.id">
          <router-link :to="'/particulars/'+item.id">
            <div class="move-list-img">
              <img :src="item.img | fromatImg" alt />
            </div>

            <div class="mb-outline-b content-wrapper">
              <div class="column content">
                <p class="item-time">{{item.nm}}</p>
                <p class="score line-ellipsis" :style="{visibility : item.sc ? '' : 'hidden'}">
                  <span class="score-suffix">观众评分</span>
                  <span class="grade">{{item.sc}}</span>
                </p>
                <p class="actor line-ellipsis">主演: {{item.star }}</p>
                <p class="show-info line-ellipsis">介绍：{{item.showInfo}}</p>
                <p></p>
              </div>
            </div>
            <div class="btn normal">
              <span
                class="fix"
                :class="{visibility : item.globalReleased=== true ? '' : 'hidden'}"
              >{{item.globalReleased=== true ? '购票' : '预售'}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </van-list>
</template>


<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  props: [
    {
      name: []
    }
  ],
  filters: {
    fromatImg(value) {
      return value.replace("w.h", "182.180");
    }
  },
  data() {
    return {
      finished: false,
      loding: false,
      pageNum: 0
    };
  },
  name: "MovieRei",
  computed: {
    ...mapState("film", ["filmlist"])
    // ...mapGetters("film", ["totalPage"])
  },
  methods: {
    ...mapActions("film", ["gitFimList"]),
    // 加载跟多影片列表数据
    loadFilmList() {
      // 每次进入 加1
      this.pageNum++;
      console.log(123);
      this.gitFimList({
        pageNum: this.pageNum,

        callback: () => {
          console.log("回调函数");
          this.loding = false;
          if (this.pageNum >= this.totalPage) {
            this.finished = true;
          }
        }
      });
    }
  },
  created() {
    this.gitFimList();
  }
};
</script>


<style scoped lang="scss">
a {
  text-decoration: none;
}
.move-list {
  font-weight: 900;
  overflow-y: auto;
  padding-left: 15px;
  background-color: #fff;
  width: 100%;
  li {
    position: relative;
  }
  .move-list-img {
    width: 64px;
    height: 90px;
    position: relative;
    margin-top: 12px;
    float: left;
    background-color: #e1e1e1;
    background-size: 100% 100%;
    img {
      background-color: transparent;
      height: 90px;
    }
  }
  .content-wrapper {
    p {
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    padding: 12px 14px 12px 0;
    margin-left: 74px;
    height: 90px;
    max-height: 90px;
    position: relative;
    .content {
      padding-right: 5px;
      margin-right: 48px;
      overflow: hidden;
      .item-time {
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
        max-height: 24px;
        margin-bottom: 7px;
        line-height: 24px;
        overflow: hidden;
      }
      .score {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        .score-suffix {
          font-size: 13px;
          color: #666;
        }
        .grade {
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
      }
      .actor,
      .show-info {
        margin-top: 6px;
        line-height: 15px;
        font-size: 13px;
        color: #666;
      }
    }
  }
  .btn {
    margin: auto 0;
    font-size: 12px;
    position: absolute;
    right: 24px;
    top: 0;
    bottom: 0;
    height: 27px;
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    .fix {
    }
  }
}
.visibility {
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  color: blue;
}
</style>
