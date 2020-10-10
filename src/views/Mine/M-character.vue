<template>
  <div>
    <van-skeleton title avatar :row="3" :loading="loading">
      <section>
        <div class="avatar">
          <img src="" alt="" />
        </div>
        <div class="rig">
          <div class="mickname">七几</div>
          <div class="account">玩吧号 : 13846226 <span>复制</span></div>
          <div>
            <div class="article">
              <span></span>
            </div>
          </div>
          <div>
            <span class="grade">Lv12</span>
            <span>还差1124积分升级</span>
          </div>
        </div>
      </section>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: pace-betweens;
  align-items: center;

  padding: 0 18px;
  .rig {
    margin-left: 16px;
    font-size: 12px;
    color: black;
    .mickname {
      font-size: 16px;
      font-weight: 900;
      line-height: 30px;
    }
    .article {
      width: 100%;
      height: 5px;
      border-radius: 2px;
      background: rgb(184, 186, 186);
      margin-top: 10px;
      position: relative;
      > span {
        width: 30%;
        height: 5px;
        position: absolute;
        left: 0;
        background: black;
        border-radius: 2.5px;
      }
    }
    .grade {
      line-height: 30px;
      margin-right: 100px;
    }
    .account {
      font-size: 14px;
      > span {
        color: rgb(154, 150, 150);
      }
    }
  }
  .avatar {
    height: 80px;
    width: 80px;
    background: brown;
    border-radius: 100%;
  }
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
