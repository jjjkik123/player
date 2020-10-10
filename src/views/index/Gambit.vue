<template>
  <div id="gambit">
    <div class="top">
      <div class="bulk" v-for="(item,index) in img" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
    <div class="bottom">
      <img src="../../assets/img/gambit5.jpg" alt="">
    </div>
  </div>
</template>
<script>
// import img1 from '../../assets/img/gambit1.jpg'
export default {
  data() {
    return {
      // img:[img1,'@/assets/img/gambit1.jpg','@/assets/img/gambit1.jpg','@/assets/img/gambit1.jpg']
      img: [require('../../assets/img/gambit1.jpg'),require('../../assets/img/gambit2.jpg'),require('../../assets/img/gambit3.jpg'),require('../../assets/img/gambit4.jpg')]
    }
  },
};
</script>
<style lang="scss" scoped>
#gambit {
  align-self: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  .top {
    height: 150px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;
    .bulk {
      width: 170px;
      height: 70px;
       border-radius: 6px;
       img {
         width: 100%;
         height: 100%;
       }
    }
  }
  .bottom {
    height: 70px;
    background-color: yellow;
    img {
         width: 100%;
         height: 100%;
       }
   
  }
}
</style>