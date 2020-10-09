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
      <div class="create">
        <p>创建好友房</p>
        <p>邀请好友一起玩游戏</p>
      </div>
      <div class="create">
        <p>搜索房间</p>
        <p>上次在1665 42房</p>
      </div>
    </div>
    <h3>我的包间</h3>
    <p class="private_zoom">
      <span>私密趴 靓号房就在私人包间!</span>
      <span>去购买</span>
    </p>
    <h3>推荐房间</h3>
    <div class="recommend">
      <div class="item">
        <div class="img"></div>
        <div class="name">
          <div class="top"><span>房号: 1077155</span> <span>31级</span></div>
          <div class="bottom">狼人游戏(娱)</div>
        </div>
        <div class="sex">
          <van-icon name="user-o" />
          <span>2</span>
          <van-icon name="user-o" />
          <span>1</span>
        </div>
      </div>
       <div class="item">
        <div class="img"></div>
        <div class="name">
          <div class="top"><span>房号: 1077155</span> <span>31级</span></div>
          <div class="bottom">狼人游戏(娱)</div>
        </div>
        <div class="sex">
          <van-icon name="user-o" />
          <span>2</span>
          <van-icon name="user-o" />
          <span>1</span>
        </div>
      </div>
       <div class="item">
        <div class="img"></div>
        <div class="name">
          <div class="top"><span>房号: 1077155</span> <span>31级</span></div>
          <div class="bottom">狼人游戏(娱)</div>
        </div>
        <div class="sex">
          <van-icon name="user-o" />
          <span>2</span>
          <van-icon name="user-o" />
          <span>1</span>
        </div>
      </div>
       <div class="item">
        <div class="img"></div>
        <div class="name">
          <div class="top"><span>房号: 1077155</span> <span>31级</span></div>
          <div class="bottom">狼人游戏(娱)</div>
        </div>
        <div class="sex">
          <van-icon name="user-o" />
          <span>2</span>
          <van-icon name="user-o" />
          <span>1</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("买包间");
    },
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
    .create {
      width: 172px;
      background-color: blue;
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
        margin-left: 72px;
        font-size: 12px;
        span {
          margin: 0 6px;
        }
      }
    }
  }
}
</style>