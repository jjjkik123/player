<template>
  <div id="double">
    <div>
      <div class="img"></div>
      <div class="font">
        <span>五子棋</span>
        <span>46096对在玩</span>
      </div>
    </div>
    <div>
      <div class="img"></div>
      <div class="font">
        <span>斗兽棋</span>
        <span>46096对在玩</span>
      </div>
    </div>
    <div>
      <div class="img"></div>
      <div class="font">
        <span>台球</span>
        <span>46096对在玩</span>
      </div>
    </div>
    <div>
      <div class="img"></div>
      <div class="font">
        <span>更多小游戏</span>
        <span>46096对在玩</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
#double {
  width: 350px;
  height: 160px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 170px;
    height: 70px;
    background-color: yellow;
    display: flex;
    .img {
      width: 45px;
      height: 45px;
      margin-top: 10px;
      margin-left: 11px;
      background-color: red;
    }
    .font {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 14px;
      span:first-of-type {
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        margin-bottom: 10px;
        color: #000000;
      }
      span:last-of-type {
        font-size: 10px;
        font-family: PingFang;
        font-weight: 500;
        color: #000000;
      }
    }
  }
}
</style>