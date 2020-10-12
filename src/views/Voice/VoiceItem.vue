<template>
    <div class="voice-item">
        <img :src="img" alt="">
        <span>今日排行榜</span>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <p>></p>
    </div>
</template>

<script>
import img from '../../../static/img/444.png'
export default {
    data(){
        return {
            img
        }
    }
}
</script>

<style lang="scss" scoped>
    .voice-item{
        width: 346px;
        height: 51px;
        // background: blue;
        opacity: 0.63;
        border-radius: 7px;
        margin: 0 15px 22px;
        background: #F7F8FA;
        position: relative;
        img{
            position: absolute;
            left: 17px;
            top:14px;
        }
        span{
            // width: 69px;
            // height: 13px;
            font-size: 14px;
            font-family: PingFang;
            font-weight: 500;
            color: #343434;
            line-height: 20px;
            position: absolute;
            left:60px;
            top:17px;
        }
        ul{
            width: 108px;
            position: absolute;
            right: 30px;
            top:10px;
            li{
                width: 36px;
                height: 36px;
                margin: 0;
                padding: 0;
                background: #FFF234;
                border: 1px solid #F7F8FA;
                border-radius: 50%;
                float: left;
            }
        }
        p{
            position: absolute;
            right:0;
            top:15px
        }
    }
</style>