<template>
    <div class="focus-box">
        <voice-top></voice-top>
        <div class="box-son">
            <div class="the-label">
                <p class="the-label-p">
                    只看粉丝
                </p>
            </div>
            <div class="sales" v-for='(item,index) in 5' :key='index'>
                <div class="sales-box"></div>
                <span class="sales-hua">华语歌单</span>
                <h5>我很容易满足</h5>
                <p class="sales-title">电台情歌</p>
                <div class="sales-ball"></div>
                <span class="sales-person">46人</span>
                <p class="sales-l"></p>
            </div>
        </div>
        <div class="openRoom">
            <p>开启房间</p>
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
    //  height: 86px;
     width: 100%;
    //  margin: 0 10px 0 10px;
     position: relative;
     .box-son{
         margin: 0 15px;
        //  background: green;
      
         .sales{
             height: 70px;
             width: 100%;
             margin-top: 12px;
             margin-bottom: 12px;
                position: relative;
             .sales-box{
                width: 63px;
                height: 63px;
                background: #FFDE00;
                border-radius: 6px;
             }
             .sales-hua{
                display: block;
                width: 55px;
                height: 20px;
                background: #FFF234;
                border-radius: 4px;     
                font-size: 11px;
                font-family: PingFang;
                font-weight: 500;
                color: #000000;
                text-align: center;
                line-height: 20px;
                position: absolute;
                top: 2px;
                left: 80px;
             }
             .sales-ball{
                width: 25px;
                height: 25px;
                background: #FFF234;
                border-radius: 50%;
                 position: absolute;
                bottom: 20px;
                left: 80px;
             }
             .sales-title{
                width: 60px;
                height: 14px;
                font-size: 15px;
                font-family: PingFang;
                font-weight: 500;
                color: #666666;
                position: absolute;
                bottom: 25px;
                left: 115px;
             }
             h5{
                width: 100px;
                height: 15px;
                font-size: 16px;
                font-family: PingFang;
                font-weight: 500;
                color: #000000;
                position: absolute;
                top: 2px;
                left: 140px;
             }
             .sales-person{
                width: 30px;
                height: 10px;
                font-size: 11px;
                font-family: PingFang;
                font-weight: 500;
                color: #50AAF1;
                position: absolute;
                top: 2px;
                right: 0px;
             }
             .sales-l{
                 width: 346px;
                height: 1px;
                background: #EAEAEA;
                 position: absolute;
                 bottom: 0;
             }
         }
        
     }

.the-label{
        width: 66px;
        height: 25px;
        margin:10px 0;
        .the-label-p{
            width: 66px;
            border-radius: 4px;
            font-size: 11px;
            font-family: PingFang;
            font-weight: 500;
            color: #000000;
            text-align: center;
            line-height: 25px;
             position: absolute;
            right: 15px;
            background: #FFDE00;
        }
    }
    .openRoom{
        margin-top: 80px;
        width: 144px;
        height: 46px;
        background: #FEEE36;
        border-radius: 7px;
         margin-left: 15px;
        p{
           line-height: 46px;
           text-align: center;
            font-size: 16px;
            font-family: PingFang;
            font-weight: bold;
            color: #000000;
        }
    }
}
    
</style>