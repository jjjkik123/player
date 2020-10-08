<template>
<div>
    <div class="reClassify">

        <van-tabs v-model="active" swipeable animated color="white">
            <van-tab >
                  <div class="classifyItem"  v-for="(item,index) in dynamicList" :key="index">
                    <img :src="item.headImg" alt="">
                    <article>
                        <p>{{item.writer}}</p>
                        <p>{{item.title}}</p>
                    </article>
                  </div>
            </van-tab>
        <van-tab > </van-tab>
        <van-tab ></van-tab>
        <van-tab ></van-tab>
        </van-tabs>
      
       
    </div>

     <div class="dynamicWrap" v-for="(item,index) in dynamicList" :key="index">
         <div class="recom">推荐</div>
        <div class="friend">
            <img :src="item.headImg" alt="">
            <div>
                <p>{{item.writer}}</p>
                <p>{{item.time}}</p>
            </div>
        </div>
        <div class="title">
            {{item.content}}
        </div>
        <div class="vocie" v-if="item.vocie">
           语音消息： <span>{{item.vocie}}</span>
        </div>
        <div class="match" v-if="item.contentImg">
            <img :src="item.contentImg" alt="">
            <div>
                <p>{{item.title}}</p>
                <p>{{item.intro}}</p>
            </div>
        </div>
        <div class="topic" v-if="item.contentImg">
            <span># {{item.title}}</span> | <span> 关注 </span>
        </div>
        <div class="like">
            <div class="love">
                <van-icon name="like-o" size="20px"/>
                <span>{{item.comment}}k</span>
            </div>
            <div class="love">
                <van-icon name="chat-o" size="20px"/>
                <span>{{item.reader}}k</span>

            </div>
            <div class="love">
                <van-icon name="share-o"  size="20px"/>
                <span>{{item.relay}}k</span>

            </div>
            <div class="love">
                <van-icon name="fire-o" size="20px"/>
                <span>{{item.collect}}w</span>
            </div>
        </div>
        <div class="comment">
            <input type="text" placeholder="说点什么"> <button> 发送</button>
        </div>
    </div>
</div>
</template>
 <script>
 import { mapState,mapActions } from 'vuex'
 export default {
data() {
return {
         active: 2,
}
},
mounted(){
        this.getDyanamic()
},
computed: {
    ...mapState('FindModule',{
        dynamicList:'dynamicList'
    })
},
methods: {
        ...mapActions('FindModule',[
            "getDyanamic"
        ])
},
}
</script>
<style lang='scss' scoped>
.reClassify{
    width: 100%;
    height: 190px;
    // margin-top: 30px;
    .classifyItem{
        width: 170px;
        float: left;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 18px;
        img{
            width: 35px;
            height: 35px;
            border-radius: 5px;
            margin-right: 6px;
            margin-left: 3px;
        }
        article{
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 14px;
            & p:last-child{
                font-size: 12px;
                margin-top: 3px;
                color: gray;
            }
        }
    }
}
.dynamicWrap{
    margin-top: 20px;
    .recom{
        margin-bottom: 10px;
        width: 31px;
        height: 16px;
        background-color: #FFF234;
        font-size: 8px;
        // font-style: italic;
        text-align: center;
        line-height: 16px;
    }
    .friend{
        width: 100%;
        height: 40px;
        display: flex;
        img{
            width: 38px;
            height: 38px;
            border-radius: 50%;
        }
        div{
            margin-top: 4px;
            margin-left: 7px;
             & p:nth-child(1){
            font-size: 13px;
            color: #333333;
            }
            & p:nth-child(2){
                font-size: 11px;
                margin-top: 4px;
                color: #666666;
            }
        }
       
    }
    .title{
        font-size: 15px;
        color: #333333;
        margin: 10px 0;
        text-indent: 30px;
    }
    .vocie{
        background-color: #2AEDAB;
        width: 220px;
        height: 46px;
        border-radius: 23px;
        margin-bottom: 8px;
        font-size: 13px;
        color: white;
        padding: 0 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span{
            font-size: 13px;
            color: white;
        }
    }
    .match{
        width: 100%;
        height: 94px;
        background-color:  #F7F8FA;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        img{
            width: 73px;
            height: 73px;

        }
        div{
            margin-left: 10px;
            & p:nth-child(1){
                font-size: 15px;
                margin-top:15px ;                
            }
            & p:nth-child(2){
                font-size: 12px;
                margin-top: 15px;
                color: gray;
                
            }
        }

    }
    .topic{
        margin: 10px 0;
        width: 155px;
        height: 26px;
        border-radius: 13px;
        background-color:  #F7F8FA;
        font-size: 11px;
        line-height: 26px;
        text-align: center;
        & span:last-child{
            color: rgb(0, 204, 153);
        }

    }
    .like{
        width: 100%;
        height: 24px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .love{
            width: 25%;
            display: flex;
            justify-content: center;
            span{
                font-size: 10px;
                color: gray;
                margin: 6px 3px;
            }
        }
    }
    .comment{
        width: 100%;
        height: 42px;
        input{
            height: 42px;
            width: 290px;
            background-color: #F7F8FA;
            border-radius: 6px;
            border: none;
            text-indent: 10px;
        }
        button{
            background-color: #fff;
            border: none;
        }
    }
}   
</style>