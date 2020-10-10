<template>
<div class="focusWrap">
    <div class="focusTitle">
        <p>选择感兴趣的话题</p>
        <p>为你推荐了一些可能会喜欢的话题</p>
    </div>

    <div class="focusClassify" v-for="(item,index) in focusList" :key="index">
        <div class="top">
            <img :src="item.icon" alt="">
            <span>{{item.title}}</span>
        </div>
        <div class="bottom">
           <div class="classifyItem" v-for="(items,indexs) in item.list" :key="indexs">
                <img :src="items.timg" alt="">
                <aside>{{items.tname}}</aside>
                <p>{{items.tnum}}</p>
                <button> + </button>
           </div>
        </div>
    </div>
</div>
</template>
 <script>
 import {mapState} from 'vuex'
 export default {
data() {
return {
        
}
},
mounted(){
    this.$store.dispatch('FindModule/getFocusClassify')    
     
},
components:{
            
},
computed: {
    ...mapState('FindModule',{
        focusList:"focusList"
    })
},
methods: {
        
},
}
</script>
<style lang='scss' scoped>
.focusWrap{
    margin-top: 60px;
    padding: 0 15px;
    .focusTitle{
        width: 100%;
        height: 84px;
        background-color: #FFF234;
        padding: 26px;
        border-radius: 10px;
        
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        & p:first-child{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
    .focusClassify{
        margin-top: 20px;
        margin-bottom: 20px;
        .top{
            height: 20px;
            line-height: 20px;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 18px;
            img{
                width: 15px;
                height: 15px;
                position: relative;
                top: 2px;
                margin-right: 4px;

            }
        }
        .bottom{
            display: flex;
            justify-content: space-around;
            .classifyItem{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                
                img{
                    width: 68px;
                    height: 68px;
                    border-radius: 6px;
                    background-color: gray;
                    margin-bottom: 20px;
                }
                aside{
                    font-size: 16px;
                    font-weight: bold;
                    white-space: nowrap;
                    width: 100px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p{
                    font-size: 14px;
                    margin: 10px 0;
                }
                button{
                    text-align: center;
                    width: 50px;
                    height: 26px;
                    font-size: 22px;
                    line-height: 22px;
                    font-weight: bold;
                    border: none;

                }
            }
           
        }
    }
}
</style>