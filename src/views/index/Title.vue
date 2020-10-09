<template>
  <div id="title">
    <div class="left">
      <span>{{title}}</span>
    </div>
    <div class="right">
      <span>更多></span>
    </div>
  </div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style lang="scss" scoped>
#title {
  align-self: center;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    width: 100px;
    height: 17px;
    font-size: 18px;
    font-family: PingFang;
    font-weight: bold;
    color: #000000;
  }
  .right {
    width: 40px;
    height: 13px;
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #000000;
  }
}
</style>