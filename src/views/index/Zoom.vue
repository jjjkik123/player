<template>
  <div id="zoom">
    <van-nav-bar
      :left-arrow="true"
      right-text="买包间"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <h2 class="title">房间</h2>
    <div class="create_zoom">
      <div class="create" v-for="(item,index) in zoom" :key="index">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
      </div>
    </div>
    <h3>我的包间</h3>
    <p class="private_zoom">
      <span>私密趴 靓号房就在私人包间!</span>
      <span>去购买</span>
    </p>
    <h3>推荐房间</h3>
    <div class="recommend">
      <div class="item" v-for="(item,index) in recommend" :key="index">
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <div class="name">
          <div class="top">房号: <span>{{item.zoomId}}</span> <span>{{item.level}}级</span></div>
          <div class="bottom">{{item.game}}</div>
        </div>
        <div class="sex">
          <van-icon name="like-o" />
          <span>{{item.good}}</span>
          <van-icon name="user-o" />
          <span>{{item.people}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      zoom: [{
        title:'创建好友房',
        desc:'邀请好友一起玩游戏'
      },{
        title:'搜索房间',
        desc:'上次在1665 42房'
      }],
    };
  },
  computed: {
    recommend() {
      return this.$store.state.IndexModule.recommend
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("买包间");
    },
    getRecommendList() {
      this.$store.dispatch('IndexModule/getRecommendList');
    }
  },
  created() {
    this.getRecommendList();
  },
};
</script>

<style lang="scss" scoped>
#zoom {
  display: flex;
  flex-direction: column;
  .van-nav-bar {
    color: black;
  }
  .title {
    margin-left: 17px;
    font-size: 23px;
    font-family: PingFang;
    font-weight: bold;
    color: #333333;
  }
  .create_zoom {
    width: 355px;
    height: 80px;
    display: flex;
    align-self: center;
    margin-top: 30px;
    margin-bottom: 40px;
    justify-content: space-between;
    .create:last-of-type {
      background-color: rgb(243,95,118);
    }
    .create {
      width: 172px;
      background-color: rgb(124,209,229);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      p {
        font-size: 18px;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
        margin-left: 58px;
      }
      p:first-of-type {
        margin-bottom: 7px;
      }
      p:last-of-type {
        font-family: PingFang;
        font-weight: 500;
        color: #ffffff;
        font-size: 11px;
        margin-right: 5px;
      }
    }
  }
  h3 {
    margin-left: 17px;

    font-size: 16px;
    font-family: PingFang;
    font-weight: bold;
    color: #333333;
  }
  .private_zoom {
    margin: 113px auto 48px;
    span {
      font-size: 14px;
      font-family: PingFang;
      font-weight: 500;
      color: #666666;
    }
    span:last-of-type {
      margin-left: 13px;

      color: #52b3c6;
    }
  }
  .recommend {
    align-self: center;
    display: flex;
    width: 350px;
    flex-direction: column;
    
    .item {
      height: 60px;
      margin-top: 25px;
      display: flex;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: gray;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        width: 140px;
        margin-left: 11px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          font-size: 14px;
          font-family: PingFang;
          font-weight: 500;
          color: #333333;
          display: flex;
          justify-content: space-between;
          span:last-of-type {
            display: inline-block;
            width: 40px;
            height: 15px;
            font-size: 8px;
            font-family: PingFang;
            text-align: center;
            line-height: 15px;
            border-radius: 6px;
            font-weight: bold;
            color: #333333;
            background-color: yellow;
          }
        }
        .bottom {
          margin-bottom: 6px;
          font-size: 11px;
          font-family: PingFang;
          font-weight: 500;
          color: #666666;
        }
      }
      .sex {
        margin-left: 32px;
        font-size: 12px;
        span {
          margin: 0 6px;
        }
      }
    }
  }
}
</style>