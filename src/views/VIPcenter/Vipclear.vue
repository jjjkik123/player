<template>
  <div class="contaner">
    <div class="top">会员服务协议</div>
    <div class="bottom" @click="showPopup">立即开通</div>
    <van-popup round v-model="show" position="bottom" :style="{ height: '30%' }">
      <img class="ewm" src="../../assets/img/ewm.jpg" alt="">
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
     showPopup() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.contaner {
  .ewm {
    width: 150px;
    height: 150px;
    display: block;
    margin: 40px auto;
  }
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  font-size: 16px;
  .top {
    display: flex;
    font-weight: bold;
    margin: 15px;
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    background: gold;
    width: 90%;
    padding: 20px 0;
    border-radius: 10px;
  }
}
</style>