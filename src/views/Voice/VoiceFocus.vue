<template>
    <div class="focus-box">
        <voice-top></voice-top>
        <div>
            <div class="the-label">
                <p class="the-label-p">
                    只看粉丝
                </p>
            </div>
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                v-for="(item,index) in 5"
                :key='index'
            />
        </div>
       
    </div>
</template>

<script>
import VoiceTop from './VoiceTop'
export default {
    components:{
        VoiceTop
    }
}
</script>

<style lang="scss">
.focus-box{
     position: relative;
.the-label{
        width: 66px;
        height: 25px;
        margin:10px 0;
        .the-label-p{
            width: 66px;
            border-radius: 4px;
            // height: 100%;
            font-size: 11px;
            font-family: PingFang;
            font-weight: 500;
            color: #000000;
            text-align: center;
            line-height: 25px;
            // float: right;
             position: absolute;
            right: 0;
            background: #FFDE00;
        }
    }
}
    
</style>