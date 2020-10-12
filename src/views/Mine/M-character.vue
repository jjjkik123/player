<template>
  <div>
    <van-skeleton title avatar :row="3" :loading="loading">
      <section v-if="login.username">
        <div class="avatar">
          <img :src="login.img" alt="" />
        </div>
        <div class="rig">
          <div class="mickname">{{login.nickname}}</div>
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
      <div v-else class="headerinfo" @click="goLogin">
      <div class="info-img">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1512683289,2327109158&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <p>请先去登录</p>
    </div>
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
  computed: {
    login() {
      return this.$store.state.IndexModule.login;
    }
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.headerinfo {
    width: 100%;
    height: 102px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    .info-img {
      width: 58px;
      height: 58px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 20px;
      margin-left: 20px;
    }
    .info {
      height: 58px;
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: center;
      .info-header {
        margin-bottom: 7px;
        span:first-of-type {
          font-size: 18px;
          font-family: PingFang;
          font-weight: bold;
          color: #000000;
        }
        span:last-of-type {
          background: rgba(255, 241, 51, 0.74);
          border-radius: 4px;
          margin-left: 4px;
          font-size: 10px;
          font-family: PingFang;
          font-weight: bold;
          color: #000000;
        }
      }
      .info-footer {
        display: flex;
        p {
          margin-right: 20px;
          font-size: 12px;
          span:nth-child(2) {
            margin: 0 6px;
          }
        }
      }
    }
  }
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
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
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
