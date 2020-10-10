<template>
  <div id="IndexFriend">
    <div class="left" v-for="(item,index) in Friend" :key="index">
      <div class="img">
        <img :src="item.img" alt="">
      </div>
      <div class="game">
        <span>{{item.name}}</span>
        <span>{{item.game}}></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Friend:[
        {
          name:'呆',
          game:'你说我猜>',
          img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2065050661,3169264164&fm=26&gp=0.jpg'
        },
        {
          name:'快乐派',
          game:'狼人杀>',
          img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3785319738,2331527599&fm=26&gp=0.jpg'
        }
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
#IndexFriend {
  width: 350px;
  height: 60px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    width: 170px;
    height: 58px;
    display: flex;

    .img {
      width: 58px;
      height: 50px;
      background-color: red;
      border-radius: 20px;
      align-self: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .game {
      flex: 1;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      span:first-of-type {
        font-size: 15px;
        font-family: PingFang;
        font-weight: bold;
        color: #000000;
      }
      span:last-of-type {
        font-size: 11px;
        font-family: PingFang;
        font-weight: 500;
        color: #000000;
      }
    }
  }
  .left:last-of-type {
    .img {
      margin-left: 30px;
      width: 58px;
      height: 58px;
      border-radius: 50%;
    }
  }
}
</style>