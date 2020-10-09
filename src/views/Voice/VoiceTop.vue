<template>
    <van-tabs v-model="active" class="voice-top">
        <van-tab :title="item" v-for="(item,index) in msg" :key="index">
        </van-tab>
    </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
       msg:['房间','电台','派对','关注']
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