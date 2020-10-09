<template>
  <dir id="Message-header">
    <van-tabs v-model="active">
      <van-tab title="item" v-for="(item,index) in messageBar" :key="index">内容 1</van-tab>
    </van-tabs>

    <van-icon name="add-o" />
  </dir>
</template>


<script>
export default {
  data() {
    return {
      messageBar: [聊天, 推荐, 好友, 群组],
    };
  },
};
</script>


<style lang="scss">
</style>