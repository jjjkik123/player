<template>
    <div class="voice-box">
        <div class="voice-modules">
            <img :src="img" alt="">
            <div class="voice-item">
                <p >人气TOP1</p>
            </div>
            <span>124人</span>
             <p class="title">娇娇幺幺告别演唱...</p>
              <div class='voice-user'>
                <p class="voice-ball"></p>
                <p class='voice-play'>SD 百里</p>
                <img :src="img2" alt="">
            </div>
        </div>
        <div class="voice-modules">
            <img :src="img1" alt="">
            <div class="voice-item">
                <p>拍卖</p>
            </div>
            <span>124人</span>
            <p class="title">娇娇幺幺告别演唱...</p>
            <div class='voice-user'>
                 <p class="voice-ball"></p>
                <p class='voice-play'>SD 百里</p>
                <img :src="img2" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
import img from '../../../static/img/555.jpg'
import img1 from '../../../static/img/666.jpg'
import img2 from '../../../static/img/888.png'
export default {
    data() {
        return {
            img,img1,img2
        }
    },
}
</script>
<style lang="scss">
.voice-box{
    display: flex;
    justify-content: center;
    .voice-modules{
        position: relative;
        width: 168px;
        height: 224px;
        border: 1px solid #EAEAEA;
        border-radius: 6px;
        float: left;
        // background: chartreuse;
        img{
            width: 168px;
            height: 180px;
        }
        .voice-item{
            width: 60px;
            height: 22px;
            position: absolute;   
            top: 5px;
            left: 10px;
            background: #FEEE36;
            border-radius: 3px 2px 2px 2px;
            padding: 0 5px 0 5px;
            p{
            // width: 48px;
            // height: 11px;
            font-size: 12px;
            font-family: PingFang;
            font-weight: 500;
            color: #000000;
            text-align: center;
            line-height: 22px;
            }
        }
        span{
            position: absolute;
            top:10px;
            right: 2px;
            font-size: 12px;
            font-family: PingFang;
            font-weight: bold;
            color: #FFFFFF;
        }
        .title{
            // width: 140px;
            // height: 16px;
            font-size: 16px;
            font-family: PingFang;
            font-weight: bold;
            color: #dddddd;
            position: absolute;
            bottom: 45px;
            left:15px;
        }
       
    }
    .voice-user{
        // position: relative;
        display: flex;
        justify-content: space-between;
        .voice-ball{
            width: 32px;
            height: 32px;
            // display: block;
            background: #FFF234;
            border-radius: 50%;
            position: absolute;
            left: 10px;
            bottom:6px;
        }
        .voice-play{
            position: absolute;
            left: 30px;
            width: 100px;
            height: 50px;
            font-size: 18px;
            text-align: center;
            line-height: 30px;
        }
        img{
            position: absolute;
            right: 30px;
            bottom: 15px;
            width: 12px;
            height: 12px;
        }
    }
    .voice-modules:first-child{
        margin-right: 10px;
    }
}
    
</style>