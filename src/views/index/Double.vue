<template>
  <div id="double">
    <div v-for="(item, index) in double" :key="index" :style='item.bgc'>
      <div class="img" >
        <img :src="item.img" alt="" srcset="">
      </div>
      <div class="font">
        <span>{{item.title}}</span>
        <span>{{item.number}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    double() {
      return this.$store.state.IndexModule.double
    }
  },
  methods: {
    getDoubleList() {
      this.$store.dispatch('IndexModule/getDoubleList')
    }
  },
  created() {
    this.getDoubleList();
  },
};
</script>

<style lang="scss" scoped>
#double {
  width: 350px;
  height: 160px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 170px;
    height: 70px;
    border-radius: 10px;
    // background-color: yellow;
    display: flex;
    .img {
      width: 45px;
      height: 45px;
      margin-top: 10px;
      margin-left: 11px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .font {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 14px;
      span:first-of-type {
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        margin-bottom: 10px;
        color: #000000;
      }
      span:last-of-type {
        font-size: 10px;
        font-family: PingFang;
        font-weight: 500;
        color: #000000;
      }
    }
  }
}
</style>