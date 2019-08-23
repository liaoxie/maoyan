<template>
  <div class="Parculars">
    <div class="img">
      <img
        src="https://pic.maizuo.com/usr/movie/84712c7b131b5e9f8c0c0fe5e1ee9778.jpg?x-oss-process=image/quality,Q_70"
        alt
      />
    </div>
    <div class="introduce">
      <p class="name">
        速度与激情：特别行动
        <span>3d</span>
      </p>
      <p>动作 | 惊悚 | 犯罪</p>
      <p>2019-08-23上映</p>
      <p>英国 美国 | 133分钟</p>
      <p
        class="title"
      >一个是美国外交安全局的忠诚特工、身材魁梧的执法者霍布斯（强森 饰），一个是前英国军事特工精英、无法无天的恶棍肖（斯坦森 饰）。在2015年的《速度与激情7》中首次对峙之后，两人不论言语还是肢体都冲突不断，一直试图打倒对方。 然而，通过高科技进行了基因增强的无政府主义者布里克斯顿（伊德瑞斯·艾尔巴饰）控制了一种可能永远改变人类命运的不为人知的生化武器，并且还打败了一位大胆优秀又特立独行的军情六处特工（曾出演《王冠》的凡妮莎·科比饰）——她恰好是肖的妹妹，为了扳倒这个世界上唯一可能比他们更厉害的敌人，这两个不共戴天的宿敌不得不联手。</p>
    </div>

    <div class="actor">
      <p class="actor-name">演员人员</p>
      <ul>
        <li v-for="itm in 4">
          <img
            src="https://pic.maizuo.com/usr/movie/fe7467f80c6490ceb2c24cb5c1d472e2.jpg?x-oss-process=image/quality,Q_70"
            alt
          />
          <p class="tel">大道手气</p>
          <p class="teel">导演</p>
        </li>
      </ul>
    </div>

    <div class="button-box">选座购票</div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped lang='scss'>
.Parculars {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  .img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .introduce {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    p {
      line-height: 20px;
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .name {
      color: #191a1b;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      margin-right: 7px;
      span {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .title {
      height: 38px;
      line-height: 20px;
      overflow: hidden;
      margin-top: 12px;
    }
  }

  .actor {
    background-color: #fff;
    .actor-name {
      width: 100%;
      padding: 15px;
    }
    ul {
      width: 100%;
      height: 140px;
      background: rgb(255, 255, 255);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow-x: auto;
      position: relative;
      width: 100%;
      li {
        display: flex;
        flex-direction: column;
        flex: 1;
        text-align: center;
        position: relative;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        img {
          display: block;
          width: 85px;
          height: 85px;
          background: rgb(249, 249, 249);
        }
        .tel {
          padding-top: 10px;
          font-size: 12px;
          color: #191a1b;
          width: 85px;
          height: 18px;
          display: block;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .teel {
          font-size: 10px;
          color: #797d82;
        }
      }
    }
  }
  .button-box {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>
