<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
 
  <div id="Index">
    <index-header></index-header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
    <index-title :title="title[0]"></index-title>
    <index-friend></index-friend>
    <index-title :title="title[1]"></index-title>
    <index-double></index-double>
    <index-title :title="title[2]"></index-title>
    <multi-player></multi-player>
    <index-title :title="title[3]"></index-title>
    <index-voice></index-voice>
    <index-title :title="title[4]"></index-title>
    <index-gambit></index-gambit>
  </div>
</van-pull-refresh>

</template>
<script>
import { Toast } from 'vant';
import IndexHeader from "./index/Header";
import IndexTitle from "./index/Title";
import IndexFriend from "./index/Friend";
import IndexDouble from "./index/Double";
import MultiPlayer from "./index/Play";
import IndexVoice from "./index/Voice";
import IndexGambit from "./index/Gambit";
export default {
  data() {
    return {
      title: ["好友在玩", "双人小游戏", "多人组局", "语音房间", "精彩话题"],
      swiper: [require('../assets/img/dbbg1.jpg'),require('../assets/img/dbbg2.jpg'),require('../assets/img/dbbg3.jpg'),require('../assets/img/dbbg4.jpg')],
      isLoading: false,
    };
  },
  methods: {
     async onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },
  components: {
    IndexHeader,
    IndexTitle,
    IndexFriend,
    IndexDouble,
    MultiPlayer,
    IndexVoice,
    IndexGambit,
  },
};
</script>

<style lang="scss" >
#Index {
  display: flex;
  width: 100%;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
  .my-swipe .van-swipe-item {
    //  align-self: start;
    width: 352px;
    color: #fff;
    font-size: 20px;
    line-height: 95px;
    height: 95px;
    text-align: center;
    img {
      width: 352px;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>