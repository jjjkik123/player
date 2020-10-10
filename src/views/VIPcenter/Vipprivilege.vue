<template>
  <div class="contaner">
    <div class="exclusive">
      <div class="top">专属特权</div>
      <div class="bottom">
        <div class="modul">
          <div class="round hs">
            <van-icon name="gold-coin-o" color="#fff" class="ww" />
          </div>
          <div class="rn">
            <h1>S礼包</h1>
            <p>S专享特权都在这里</p>
          </div>
        </div>
        <div class="modul">
          <div class="round gw">
            <van-icon name="smile-o" color="#fff" class="ww" />
          </div>
          <div class="rn">
            <h1>每日抽奖</h1>
            <p>S专享特权都在这里</p>
          </div>
        </div>
        <div class="modul">
          <div class="round ls">
            <van-icon name="gem-o" color="#fff" class="ww" />
          </div>
          <div class="rn">
            <h1>V点商城</h1>
            <p>S专享特权都在这里</p>
          </div>
        </div>
        <div class="modul">
          <div class="round vs">
            <van-icon name="browsing-history-o" color="#fff" class="ww" />
          </div>
          <div class="rn">
            <h1>Ta看过你</h1>
            <p>S专享特权都在这里</p>
          </div>
        </div>
        <div class="modul">
          <div class="round hs">
            <van-icon name="user-circle-o" color="#fff" class="ww" />
          </div>
          <div class="rn">
            <h1>后院特权</h1>
            <p>S专享特权都在这里</p>
          </div>
        </div>
        <div class="modul">
          <div class="round gw">
            <van-icon name="discount" color="#fff" class="ww" />
          </div>
          <div class="rn">
            <h1>高级狗粮</h1>
            <p>S专享特权都在这里</p>
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
.contaner {
  padding: 0 18px;
  .exclusive {
    padding: 20px 18px 20px 18px;
    width: 100%;
    // height: 140px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .top {
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .modul {
          margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .round {
          display: flex;
          height: 40px;
          width: 40px;
          border-radius: 100%;
            margin-right: 5px;

          .ww {
            margin: 2px;
            margin-top: 2.5px;
          }
        }
        .rn {
          font-size: 14px;
          p {
            font-size: 10px;
            margin-top: 4px;
            color: rgb(187, 186, 186);
          }
        }
      }
    }
  }
}
.hs{
  background:  gold;
}
.gw {
  background: rgb(230, 145, 35);
}
.ls {
  background: rgb(35, 139, 230);
}
.vs {
  background: rgb(35, 230, 184);
}
</style>
