<template>
    <div>
        <ul class="List-item">
            <li v-for="(value,index) in msg" :key="index" class="recommend" @click='hedelClick(index)' :class="{active: index == content}">
                <p>{{value}}</p>
            </li>
        </ul>
    </div>
        
</template>


<script>
export default {
    data() {
        return {
            msg:['推荐','转角','互动','音乐','游戏'],
            content:0
        }
    },
    methods: {
        hedelClick(index){
            this.content = index;
            console.log(index,this.content)
        }
    },
}
</script>

<style lang="scss" scoped>
.List-item{
<<<<<<< HEAD
    width: 100%;
    // justify-content: center;
    margin: 0 auto;
=======
    width: 350px;
>>>>>>> 3a85c4c8b7b148aee38278d15d0ad03c9869c042
    height: 32px;
    list-style: none;
    display: flex;
     justify-content: space-around;
     overflow: auto;
    .recommend{
    //  flex: 1;
        width: 40px;
        height: 32px;
        opacity: 0.7;
        border-radius: 16px;
        // float: left;
            p{
                text-align: center;
                line-height: 32px;  
                font-size: 15px;
                font-family: PingFang;
                font-weight: bold;
                color: #000000;
            }
        }
        .active{
          background: #FFF234;
        }
    }

    
</style>