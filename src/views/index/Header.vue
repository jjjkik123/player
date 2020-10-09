<template>
  <div id="Index-header">
    <div class="headerinfo">
      <div class="info-img"></div>
      <div class="info"></div>
    </div>
    <van-grid v-if="indexBar" :border="false" :column-num="5">
      <van-grid-item  v-for="(item,index) in indexBar" :key="index" :icon="item.icon" :text="item.text" :to='item.to' />
    </van-grid>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexBar: [
        {
          icon:"photo-o",
          text:"任务"
        },
        {
          icon:"photo-o",
          text:"打卡"
        },
        {
          icon:"photo-o",
          text:"后院",
          to:'backyard'
        },
        {
          icon:"photo-o",
          text:"房间",
          to:'zoom'
        },
        {
          icon:"photo-o",
          text:"更多"
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
#Index-header {
  align-self:center;
  display: flex;
  width: 350px;
  height: 214px;
  flex-direction: column;
  background-color: red;
  .headerinfo {
    width: 100%;
    height: 122px;
    background-color: blue;
    display: flex;
    align-items: center;
    .info-img {
      width: 58px;
      height: 58px;
      background-color: #fff;
      border-radius: 50%;
    }
    .info {
      height: 58px;
      background-color: yellow;
      flex: 1;
    }
  }
  .van-grid {
    margin-top: 6px;
  }
}
</style>