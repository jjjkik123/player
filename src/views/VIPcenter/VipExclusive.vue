<template>
  <div class="contaner">
    <div class="top">
      <h2>S会员专属</h2>
      <div class="bottom">
        <div class="dj">
          <i>S0</i>
          <i>S1</i>
          <i>S2</i>
          <i>S3</i>
        </div>
        <div class="article"></div>
        <div class="jy">
          <span>0</span>
          <span>20w</span>
          <span>100w</span>
          <span>200w</span>
        </div>
        <div class="advanced">
          晋级成长值: 0
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contaner {
  padding: 0 18px;

  .top {
    position: relative;
    height: 70px;
    width: 100%;
    background: rgb(240, 220, 165);
    font-size: 16px;
    margin-top: 10px;
    border-radius: 10px;
    h2 {
      padding-top: 15px;
      margin-left: 30px;
    }
    .bottom {
      height: 120px;
      width: 100%;
      top: 45px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 12px;
      background: #fff;
      border-radius: 10px;
      .dj {
          width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        font-weight: bold;
        
      }
      .article {
        width: 100%;
        height: 7px;
        border-radius: 3px;
        background: rgb(235, 233, 233);
        margin-top: 10px;
      }
      .jy {
          width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
      }
      .advanced {
          margin: 3px;
        padding: 10px;
        background: rgb(245, 245, 245);
        border-radius: 16px;
        font-size: 14px;
      }
    }
  }
}
</style>
