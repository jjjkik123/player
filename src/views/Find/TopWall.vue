<template>
<div>
 <div class="topWall">
      <div class="head head1">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=184091861,2629712367&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="head">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=114175708,4166898809&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="bgWall">
        <div class="author">
          <span class="boy">百里</span>
          <van-icon name="play-circle" size="10" color=" rgb(0, 238, 255)"/><br> 真情告白
          <span class="girl">伊人</span>
          <van-icon name="stop-circle" size="10" color="rgb(240, 168, 168)" />
        </div>
        <div class="text">
            希望我可以一直可爱下去。。。
        </div>
        <div class="moreLove">
           <span>更多表白</span><van-icon name="arrow"/>
        </div>
      </div>
    </div>
</div>
</template>
 <script>
 export default {
data() {
return {
        
}
},
mounted(){
            
},
components:{
            
},
methods: {
        
},
}
</script>
<style lang='scss' scoped>
       .topWall {
    position: relative;
    .head {
      width: 50px;
      height: 50px;
      background-color: #fff234;
      border: 3px solid white;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: -14px;
      left: 20px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .head1 {
      left: 60px;
      z-index: 2;
    }
    .bgWall {
      width: 100%;
      height: 173px;
      background-color: #4f4f4f;
      border-radius: 15px;
      padding: 0 18px;
      .author{
          margin-left: 110px;
          font-size: 11px;
          color: #9c9c9c;
          padding: 6px;
          .boy{
              font-size: 13px;
              color: white;
          }
          .girl{
              color: white;
              font-size: 12px;
          }
      }
      .text{
          font-size: 12px;
          color: rgb(211, 211, 211);
          width: 100%;
          margin-top: 50px;
          text-indent: 40px;
          letter-spacing: 1px;
      }
        .moreLove{
            color: rgb(231, 231, 231);
            font-size: 12px;
            margin-top: 45px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
  }
</style>