<template>
  <div class="contaner">
    <div class="in">
      <div class="top">
        <h2>会员V点商城</h2>
        <span>更多兑换 <van-icon name="arrow" /></span>
      </div>

      <div class="bottom">
          <div class="kp"  v-for="item in 6" :key="item">
               <div class="card">
                   <div class="sp"></div>
                   <p>雨中漫步永久卡</p>
                   <span>
                       <span class="se">12000</span>
                       V点
                   </span>
               </div>
          </div>
         
      </div>
    </div>
  </div>
</template>

<script>
export default {
    // el:'.contaner'
};
</script>

<style lang="scss" scoped>
.contaner {
  font-size: 12px;
  padding: 0 18px;
  .in{
      padding: 20px 15px;
      border-radius: 10px;
      background: #fff;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .top{
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          h2{
              font-size: 16px;
              font-weight: 0;
          }
          span{
              font-size: 14px;
              color: rgb(79, 186, 224);
              .van-icon-arrow::before{
                  color: #000;
                  margin-top: 2px;
              }
          }
          
      }
      .bottom{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .card{
              display: flex;
              flex-direction: column;
              border-radius: 5px;
              margin-bottom: 15px;
              width: 96px;
              height: 130px;
              border: 1px solid rgb(218, 216, 216);
              .sp{
                  width: 100%;
                  height: 70%;
                  background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=865533583,3108210740&fm=26&gp=0.jpg');
              }
              p{
                  font-size: 10px;
                  margin: 5px;
                  
              }
              span{
                  margin-left: 3px;
                  margin-bottom: 5px;
              }
              .se{
                      color: gold;
                  }
          }
      }
  }
}
</style>
