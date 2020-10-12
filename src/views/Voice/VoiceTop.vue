<template>
    <van-tabs v-model="active" class="voice-top">
        <van-tab :title="item.title" v-for="(item,index) in msg" :key="index" :to='item.url'>
        </van-tab>
    </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
       msg:[{title:'房间',url:'/voice/index'},{title:'电台',url:'/voice/Radio'},{title:'派对',url:'/voice/Partyi'},{title:'关注',url:'/voice/Focus'}]
    };
  },
};
</script>


<style lang="scss"  scoped>
    .voice-top{
      width: 375px;
      height: 44px;
      background: #B6B6B6;
      opacity: 0.77;
    }
</style>