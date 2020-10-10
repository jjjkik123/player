<template>
  <div id="msgrecommend">
    <div class="all">
      <p>玩游戏遇到的人</p>
      <div class="right">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008013581,4026908278&fm=26&gp=0.jpg" alt="">
        <van-icon name="arrow" />
      </div>
    </div>
    <message-player></message-player>
  </div>
</template>

<script>
import MessagePlayer from "./Player";

export default {
  data() {
    return {};
  },
  components: {
    MessagePlayer,
  },
};
</script>

<style lang="scss" scoped>
#msgrecommend {
  padding: 10px;
  .all {
    background: rgb(214, 241, 252);
    border-radius: 30px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    p {
      font-size: 16px;
    }
    .right {
      width: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .van-icon-arrow::before {
        font-size: 16px;
        display: block;
      }
      img {
        display: block;
        // background: yellow;
        border: 2px solid white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
  }
}
</style>