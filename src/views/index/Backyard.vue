<template>
  <div id="backyard">
    <van-nav-bar
      :left-arrow="true"
      right-text="后院密集"
      title="七几的后院"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="top">
      <div class="img">
        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3086421700,3397987928&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="master">
        <div class="name">
          <p>我的主人</p>
          <p>兔爷</p>
        </div>
        <div class="img1"></div>
      </div>
    </div>
    <div class="bulk">
      <div class="item" v-for="(item,index) in backyard" :key="index">
        <div class="top2">
          <div class="img2">
            <img
              :src="item.img"
              alt=""
            />
          </div>
          <div class="nickname">
            <span>赐昵称</span>
            <span>{{item.nickname}}</span>
          </div>
        </div>
        <van-divider />
        <div class="bottom"><span>{{item.done}}</span></div>
      </div>

      <div class="item2">
        <div class="img3"></div>
        <p>- 去抓更多跟班 -</p>
      </div>
    </div>
    <div class="btn">一键收币</div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      
    }
  },
  computed: {
    backyard() {
      return this.$store.state.IndexModule.backyard
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("后院秘籍");
    },
    getBackYardList() {
      this.$store.dispatch('IndexModule/getBackYardList');
    }
  },
  created() {
    this.getBackYardList();
  },
};
</script>
<style lang="scss" >

#backyard {
  img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  .van-nav-bar {
    background: #eaeaea;
  }
  .van-nav-bar .van-icon {
    color: black;
    font-size: 20px;
  }
  .top {
    display: flex;
    width: 350px;
    // height: 40px;
    align-self: center;
    position: relative;
    .img {
      width: 40px;
      height: 40px;
      margin: 25px auto 30px;
      border-radius: 50%;
      background-color: gray;
    }
    .master {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      .name {
        font-size: 10px;
        font-family: PingFang;
        font-weight: 500;
        color: #9a9a9a;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        p:last-of-type {
          margin-top: 5px;
          color: #666666;
        }
      }
      .img1 {
        width: 27px;
        height: 27px;
        background-color: gray;
        border-radius: 50%;
        margin-left: 10px;
      }
    }
  }
  .bulk {
    width: 350px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: 166px;
      height: 175px;
      background-color: white;
      border-radius: 10px;
      padding: 13px;
      margin-bottom: 12px;
      position: relative;
      .top2 {
        display: flex;
        .img2 {
          width: 47px;
          height: 47px;
          border-radius: 50%;
          margin-right: 10px;
          background: #eaeaea;
        }
        .nickname {
          display: flex;
          flex-direction: column;
          span:first-of-type {
            width: 55px;
            height: 20px;
            border: 1px solid #efdc90;
            border-radius: 10px;
            text-align: center;
            line-height: 20px;
            font-size: 11px;
            font-family: PingFang;
            font-weight: 500;
            color: #fade6b;
          }
          span:last-of-type {
            margin-top: 14px;
            text-align: center;
            font-size: 11px;
            font-family: PingFang;
            font-weight: 500;
            color: #343434;
          }
        }
      }
      .bottom {
        font-size: 11px;
        font-family: PingFang;
        font-weight: 500;
        color: #666666;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .item2 {
      width: 166px;
      height: 175px;
      border-radius: 10px;
      padding: 13px;
      border: 1px dashed #999;
      margin-bottom: 12px;
      position: relative;
      .img3 {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 1px dashed #999;
        margin: 22px auto 14px;
      }
      p {
        font-size: 11px;
        font-family: PingFang;
        font-weight: 500;
        color: #9a9a9a;
        text-align: center;
      }
    }
  }
  .btn {
    width: 112px;
    height: 34px;
    background-color: yellow;
    line-height: 34px;
    border-radius: 20px;
    margin: 10px auto 0;
    text-align: center;
    font-size: 16px;
    font-family: PingFang;
    font-weight: bold;
    color: #92780d;
  }
}
</style>