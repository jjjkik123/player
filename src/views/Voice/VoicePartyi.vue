<template>
    <div>
        <vioce-top></vioce-top>
        <ul class="list">
            <li v-for='(item,index) in msg' :key='index' class="List-item" :style="{background:item.bag}">
                <img :src="img" alt="">
            </li>
        </ul>
    </div>
</template>


<script>
import VioceTop from './VoiceTop'
import img from '../../assets/img/1010.jpg'
export default {
    data(){
        return {
           msg:[
               {
                   title:'交友派对',
                   item:'蹲cp',
                   bag:'orange',
                   lis:'含三岁开启了派对'
               },
               {
                   title:'交友派对',
                   item:'略略略',
                   bag:'green',
                   lis:'含三岁开启了派对'
               },
               {
                   title:'交友派对',
                   item:'蹲cp',
                   bag:'pink',
                   lis:'含三岁开启了派对'
               },{
                   title:'交友派对',
                   item:'略略略',
                   bag:'skyblue',
                   lis:'含三岁开启了派对'
               },{
                   title:'交友派对',
                   item:'蹲cp',
                   bag:'blue',
                   lis:'含三岁开启了派对'
               },{
                   title:'交友派对',
                   item:'略略略',
                   bag:'purple',
                   lis:'含三岁开启了派对'
               }
           ],
           img
        }
    },
    components:{
        VioceTop,
    }
}
</script>

<style lang="scss">
.list{
    display: flex;
    flex-flow: row wrap;
    margin:  10px ;
    .List-item{
            width: 173px;
            height: 206px;
            background: linear-gradient(0deg, #FFD660 0%, #FFEF90 100%);
            border-radius: 7px;
            flex: 0 0 48.5%;
            margin-top: 10px;
             &:nth-child(odd) {
                margin-right: 10px;
            }
         img{
             height: 100%;
             width: 100%;
         }  
        }
}
    
</style>