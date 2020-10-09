<template>
  <div id="IndexFriend">
    <div class="left">
      <div class="img"></div>
      <div class="game">
        <span>呆</span>
        <span>你说我猜></span>
      </div>
    </div>
    <div class="right">
      <div class="img"></div>
      <div class="game">
        <span>快乐派</span>
        <span>狼人杀></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#IndexFriend {
  width: 350px;
  height: 60px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    width: 170px;
    height: 58px;
    display: flex;

    .img {
      width: 58px;
      height: 50px;
      background-color: red;
      border-radius: 20px;
      align-self: center;
    }
    .game {
      flex: 1;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      span:first-of-type {
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        color: #000000;
      }
      span:last-of-type {
        font-size: 11px;
        font-family: PingFang;
        font-weight: 500;
        color: #000000;
      }
    }
  }
  .right {
    .img {
      margin-left: 30px;
      width: 58px;
      height: 58px;
      border-radius: 50%;
    }
  }
}
</style>