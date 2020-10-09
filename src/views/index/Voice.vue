<template>
  <div id="voice">
    <div class="live">
      <div class="title">
        <span>关注在播</span>
        <span class="number">55</span>
      </div>
      <div class="footer">我很容易满足</div>
    </div>
    <div class="live">
      <div class="title">
        <span>关注在播</span>
        <span class="number">55</span>
      </div>
      <div class="footer">我很容易满足</div>
    </div>
    <div class="live">
      <div class="title">
        <span>关注在播</span>
        <span class="number">55</span>
      </div>
      <div class="footer">我很容易满足</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
#voice {
  width: 350px;
  align-self: center;
  height: 140px;
  background-color: yellow;
  display: flex;
  overflow: auto;

  .live {
    flex-shrink: 0;
    width: 130px;
    height: 130px;
    background-color: black;
    border-radius: 6px;
    padding: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      height: 24px;
      display: flex;
      justify-content: space-between;

      span:first-of-type {
        padding: 5px;
        border-radius: 4px;
        font-size: 11px;
        background: #fff234;
      }
      .number {
        font-size: 11px;
        color: white;
        margin-top: 8px;
      }
    }

    .footer {
      height: 16px;
      font-size: 15px;
      font-weight: bold;
      color: white;

      font-family: PingFang;
    }
  }
}
</style>