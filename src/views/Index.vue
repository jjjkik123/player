<template>
  <div id="Index">
    <index-header></index-header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
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
</template>
<script>
import IndexHeader from "./index/Header";
import IndexTitle from "./index/Title";
import IndexFriend from './index/Friend';
import IndexDouble from './index/Double';
import MultiPlayer from './index/Play';
import IndexVoice from './index/Voice';
import IndexGambit from './index/Gambit';
export default {
  data() {
    return {
      title:['好友在玩','双人小游戏','多人组局','语音房间','精彩话题']
    };
  },
  components: {
    IndexHeader,
    IndexTitle,
    IndexFriend,
    IndexDouble,
    MultiPlayer,
    IndexVoice,
    IndexGambit
  },
};
</script>

<style lang="scss" scoped>
#Index {
  display: flex;
  width: 100%;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
  .my-swipe .van-swipe-item {
    //  align-self: start;
    color: #fff;
    font-size: 20px;
    line-height: 95px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>