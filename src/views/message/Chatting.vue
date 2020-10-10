<template>
  <div id="chatting">
    <message-nearby></message-nearby>

    <div v-for="(item, index) in chatMan" :key="index" class="all">
      <img :src="item.img" alt="" />
      <div class="right">
        <p>{{ item.name }}</p>
        <span>{{ item.msg }}</span>
      </div>
      <span class="time">{{ item.time }}</span>
    </div>
  </div>
</template>

<script>
import MessageNearby from "./Nearby";

export default {
  data() {
    return {
      chatMan: [
        {
          name: "互动消息",
          msg: "好友喊你来撸猫啦",
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=348959600,4149101165&fm=26&gp=0.jpg",
          time: "刚刚",
        },
        {
          name: "通知",
          msg: "好友喊你来撸狗啦",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3036122436,2666208738&fm=26&gp=0.jpg",
          time: "昨天",
        },
        {
          name: "金凯瑞",
          msg: "好友喊你来撸猪啦",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2582345274,3041754039&fm=26&gp=0.jpg",
          time: "05-20",
        },
        {
          name: "小总管",
          msg: "好友喊你来撸牛啦",
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1086772439,2240584529&fm=26&gp=0.jpg",
          time: "05-20",
        },
        {
          name: "人人",
          msg: "好友喊你来撸羊啦",
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1150861197,1123781499&fm=26&gp=0.jpg",
          time: "05-20",
        },
        {
          name: "万千世界",
          msg: "好友喊你来撸龙啦",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1619711063,2414271044&fm=26&gp=0.jpg",
          time: "05-19",
        },
        {
          name: "兔爷",
          msg: "好友喊你来撸鲲啦",
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2509371347,2043609233&fm=26&gp=0.jpg",
          time: "05-19",
        },
        {
          name: "印度小黑猪",
          msg: "好友喊你来撸屎啦",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2106168639,981360299&fm=26&gp=0.jpg",
          time: "05-18",
        },
      ],
    };
  },
  components: {
    MessageNearby,
  },
};
</script>

<style lang="scss" scoped>
#chatting {
  .all {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    img {
      // background: yellow;
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }
    .right {
      width: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      p {
        font-size: 16px;
        font-weight: 800;
      }
      span {
        font-size: 12px;
      }
    }
    .time {
      font-size: 12px;
      width: 50px;
      color: #999;
    }
  }
}
</style>