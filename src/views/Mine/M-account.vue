<template>
  <div class="container">
    <div class="gr">我的账号</div>
    <div class="module">
      <div class="in">
        <span class="iconfont icon-anquanzhuye"></span>
        <div class="zt">账号安全</div>
      </div>
      <div class="in">
        <span class="iconfont icon-san"></span>
        <div class="zt">青少年模式</div>
      </div>
      <div class="in">
        <span class="iconfont icon-shezhi"></span>
        <div class="zt">设置</div>
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
  margin-top: 20px;
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
