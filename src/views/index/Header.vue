<template>
  <div id="Index-header">
    <div class="headerinfo">
      <div class="info-img">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2256978882,779444759&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="info">
        <div class="info-header">
          <span>七几</span>
          <span>12级</span>
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
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    indexBar () {
      return this.$store.state.IndexModule.indexBar
    }
  },
  methods: {
    showPopup() {
      this.show = true;
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
      this.$store.dispatch('IndexModule/getIndexBarList');
    }

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