<template>
  <div>
    <router-view></router-view>
    <keep-alive>
      <van-tabbar v-model="active" :placeholder='true' :route='true'>
      <van-tabbar-item :to="item.url" v-for="(item,index) in tabbarList" :key="index" :icon="item.icon">{{item.title}}</van-tabbar-item>
      
    </van-tabbar>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          title: "玩吧",
          icon: "home-o",
          url: "/index",
        },
        {
          title: "消息",
          icon: "search",
          url: "/message",
        },
        {
          title: "语音",
          icon: "home-o",
          url: "/voice",
        },
        {
          title: "发现",
          icon: "setting-o",
          url: "/find",
        },
        {
          title: "我的",
          icon: "friends-o",
          url: "/mine",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>