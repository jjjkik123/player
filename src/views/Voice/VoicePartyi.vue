<template>
    <div>
        <vioce-top></vioce-top>
        <ul class="list">
            <li v-for='(item,index) in 6' :key='index' class="List-item"></li>
        </ul>
    </div>
</template>


<script>
import VioceTop from './VoiceTop'
export default {
    components:{
        VioceTop,
    }
}
</script>

<style lang="scss">
.list{
    display: flex;
    // justify-content: space-around;
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
        }
}
    
</style>