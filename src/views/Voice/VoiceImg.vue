<template>
    <div class="voice-img">
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>


import Vue from 'vue';
import { Lazyload } from 'vant';
import img from '../../assets/img/1111.jpg';
import img2 from '../../assets/img/2222.png'
import img3 from '../../assets/img/333.png'

Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        img,img2,img3
      ],
    };
  },
};

</script>

<style lang="scss" scoped>
    .voice-img{
        width: 347px;
        height: 90px;
        // background: red;
        margin: 15px 15px 15px;
        img{
            height: 100%;
            width: 100%;
        }
    }
</style>