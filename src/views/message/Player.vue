<template>
  <div id="player">
    <div class="title">
      <p>附近在玩</p>
      <van-icon name="exchange" />
    </div>
  <div class="wrap">
    <div v-for="(item, index) in photo" :key="index" class="main">
      <img :src="item.img" alt="">
      <p>zhi同学<span class="boy">♂</span></p>
      <span>狼人游戏(试炼)<van-icon name="arrow" /></span>
      <span>1.9km</span>
    </div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo:[
        {
          img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=175914109,355291816&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3606318907,1382242408&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1247973601,4248283677&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=307167794,68351178&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=152027656,4103497172&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2468508453,3001514529&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1142829071,3495878313&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3710614986,1045492468&fm=26&gp=0.jpg"
        },
                {
          img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3736775032,970159282&fm=26&gp=0.jpg"
        },
      ]
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#player {
  margin: 20px 0;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 18px;
      font-weight: 900;
      display: block;
    }
    .van-icon-exchange::before {
      font-size: 18px;
      font-weight: 900;
      display: block;
    }
  }


.wrap{
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  margin:10px -20px ;
    .main {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // margin: 15px;
    img {
      // background: yellow;
      border-radius: 50%;
      height: 90px;
      width: 90px;
      margin: 15px 0;

    }
    p {
      font-size: 16px;
      font-weight: 900;
      .boy {
        background: rgb(214, 241, 252);
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: inline-block;
      }
    }
    span{
      font-size: 10px;
      margin: 15px 0;
      display: flex;
      align-items: center;
      .van-icon-arrow::before{
        font-weight: 900;
        color: black;
      }
    }
  }
}

}
</style>