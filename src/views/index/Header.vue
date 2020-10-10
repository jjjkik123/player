<template>
  <div id="Index-header">
    <van-action-sheet
      v-model="show1"
      cancel-text="取消"
      close-on-click-action
      :actions="actions"
      @select="onSelect"
    />

    <div v-if="login.username" class="headerinfo">
      <div class="info-img">
        <img :src="login.img" alt="" @click="show1 = true" />
      </div>
      <div class="info">
        <div class="info-header">
          <span>{{ login.nickname }}</span>
          <span>{{ login.level }}级</span>
        </div>
        <div class="info-footer">
          <p>
            <van-icon name="like-o" />
            <span>0</span>
            <span>+</span>
          </p>
          <p>
            <van-icon name="like-o" />
            <span>5217</span>
            <span>+</span>
          </p>
          <p>
            <van-icon name="like-o" />
            <span>954</span>
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
    <div v-else class="headerinfo" @click="goLogin">
      <div class="info-img">
        <img
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1127955351,2579331249&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <p>请先去登录</p>
    </div>
    <van-grid v-if="indexBar" :border="false" :column-num="5">
      <van-grid-item
        v-for="(item, index) in indexBar"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        :to="item.to"
        @click="a"
      />
    </van-grid>

    <van-popup v-model="show" round position="top" :style="{ height: '30%' }">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="like-o"
          text="文字"
        />
      </van-grid>
    </van-popup>

    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import { Toast } from "vant";
import { Dialog } from 'vant';
export default {
  data() {
    return {
      show: false,
      show1: false,
      actions: [{ name: "查看信息" }, { name: "切换用户" }, { name: "注销" }],
    };
  },
  computed: {
    indexBar() {
      return this.$store.state.IndexModule.indexBar;
    },
    login() {
      return this.$store.state.IndexModule.login;
    },
  },
   components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    goLogin() {
      this.$router.push("/login");
    },
    a(Event) {
      if (
        Event.target.getAttribute("class") ==
        "van-icon van-icon-good-job-o van-grid-item__icon"
      ) {
        this.show = true;
      }
    },
    getIndexBarList() {
      this.$store.dispatch("IndexModule/getIndexBarList");
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
      if (item.name == "注销") {
        sessionStorage.removeItem("username");
        this.$store.state.IndexModule.login = {};
      } else if (item.name == "切换用户") {
        sessionStorage.removeItem("username");
        this.$store.state.IndexModule.login = {};
        this.$router.push("/login");
      } else if (item.name == "查看信息") {
        Dialog.alert({
          title: "用户信息",
          messageAlign:'left',
          message: 
          `用户名是：${this.$store.state.IndexModule.login.nickname}\n等级是：${this.$store.state.IndexModule.login.level}`,
        }).then(() => {
          // on close
        });
      }
    },
  },
  created() {
    this.getIndexBarList();
  },
};
</script>

<style lang="scss" >
#Index-header {
  align-self: center;
  display: flex;
  width: 350px;
  height: 214px;
  flex-direction: column;
  .headerinfo {
    width: 100%;
    height: 102px;
    display: flex;
    align-items: center;
    .info-img {
      width: 58px;
      height: 58px;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 24px;
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
  .van-grid {
    margin-top: 6px;
  }
  .van-popup {
    .item {
      width: 60px;
      height: 40px;
      background-color: red;
      border-radius: 20px;
    }
  }
}
</style>