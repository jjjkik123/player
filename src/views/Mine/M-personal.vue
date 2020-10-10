<template>
  <div class="container">
    <div class="gr">个人中心</div>
    <div class="module">
      <div class="in">
        <span class="iconfont icon-icon-collect"></span>
        <div class="zt">平台等级中心</div>
      </div>
      <div class="in">
        <span class="iconfont icon-xuexichengjiu"></span>
        <div class="zt">成就</div>
      </div>
      <div class="in">
        <span class="iconfont icon-wodehuizhang"></span>
        <div class="zt">徽章</div>
      </div>
      <div class="in">
        <span class="iconfont icon-haoyou"></span>
        <div class="zt">要请好友</div>
      </div>
      <div class="in">
        <span class="iconfont icon-benzi"></span>
        <div class="zt">有奖征题</div>
      </div>
      <div class="in">
        <span class="iconfont icon-ic_jiaoya"></span>
        <div class="zt">访客记录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 18px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgb(228, 226, 226);
  .gr {
    
      margin: 15px 15px;
    

    width: 100%;
  }
  .module {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
     border-top: 1px solid rgb(231, 231, 231);
    .in {
        width: 33%;
        flex-shrink: 1;
        margin: 25px 0;
      display: flex; 
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 30px;
      }
      .zt {
        font-size: 14px;
        font-weight: bold;
        margin-top: 10px;
      }
    }
  }
}
</style>
