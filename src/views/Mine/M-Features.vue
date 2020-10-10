<template>
  <div class="container">
    <div class="set">
      <div class="in">
         <svg class="icon head" aria-hidden="true">
          <use xlink:href="#icon-chongzhi"></use>
        </svg>
        <span>充值</span>
      </div>
      <div class="in">
         <svg class="icon head" aria-hidden="true">
          <use xlink:href="#icon-shangchang"></use>
        </svg>
        <span>商场</span>
      </div>
      <div class="in">
        <i></i>
        <span>MOYO秀</span>
      </div>
       <div class="in">
        <span class="iconfont icon-shubao"></span>
        <span>背包</span>
      </div>
       <div class="in">
         <svg class="icon head" aria-hidden="true">
          <use xlink:href="#icon-xinaixin"></use>
        </svg>
        <span>后院</span>
      </div>
    </div>
    <div class="vip">
        <a  @click="selected()">
             <img src="../../../public/vip-1.jpg" alt="">
        </a>
       
    </div>
  </div>
</template>

<script>
export default {
 methods: {
    selected() {
     
      this.$router.push("/vipcenter")
    },
  },

};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0 18px;
  font-size: 14px;
  width: 100%;
  margin-top: 24px;
  .set {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .in {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      .icon-shubao{
          color: rgba(169, 57, 189,.7);
          font-size: 25px;
          margin: 0;
      }
      i{
          width: 30px;
          height: 30px;
          border-radius: 100%;
          background: coral;
      }
      span{
          margin-top: 10px;
      }
    }
  }
  .vip{
      margin: 20px 0;
    img{
        
        width: 100%;
    }
  }
}

.icon {
  width: 28px;
  height: 28px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
