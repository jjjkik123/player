<template>
  <div id="play">
    <div class="bulk">
      <div class="top">
        <div class="font">
          <span>画画猜猜</span>
          <span>灵魂画手诞生记</span>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="font">
            <span>口袋撸猫</span>
            <span>我们一起撸猫猫</span>
          </div>
        </div>
        <div class="right">
          <div class="font">
            <span>剧本杀</span>
            <span>来一场声音的邂逅</span>
          </div>
        </div>
      </div>
    </div>
     <div class="bulk">
      <div class="top">
        <div class="font">
          <span>画画猜猜</span>
          <span>灵魂画手诞生记</span>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="font">
            <span>口袋撸猫</span>
            <span>我们一起撸猫猫</span>
          </div>
        </div>
        <div class="right">
          <div class="font">
            <span>剧本杀</span>
            <span>来一场声音的邂逅</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#play {
  display: flex;
  width: 350px;
  align-self: center;
  flex-direction: column;
  .bulk:first-of-type {
    margin-bottom: 10px;
  }
  .bulk {
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .font {
      display: flex;
      flex-direction: column;
      span:first-of-type {
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        margin-bottom: 6px;
      }
      span:last-of-type {
        font-size: 10px;
        font-family: PingFang;
        font-weight: 500;
        color: #000000;
      }
    }
    .top {
      height: 90px;
      width: 350px;
      padding: 18px 16px;
      background-color: yellow;
    }
    .bottom {
      height: 90px;
      justify-content: space-between;
      display: flex;
      .left,
      .right {
        width: 170px;
        padding: 18px 16px;
              background-color: yellow;

      }
    }
  }
}
</style>