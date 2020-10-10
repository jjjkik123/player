<template>
    
   <header>
       
      <div class="wh"><span class="iconfont icon-wenhao"></span></div>

      <div class="people">
        <div></div>
      </div>
      <div class="open"> <i></i>开通会员即可享受专属特权</div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 240px;
  background: rgb(50, 48, 47);
  color: #fff;
  padding: 18px 18px 26px 18px;
  .wh {
    width: 100%;
    > span {
      font-size: 25px;

      float: right;
    }
  }
  .people {
    height: 75px;
    width: 75px;
    border-radius: 100%;
    background: rgb(94, 91, 89);
    position: relative;
    > div {
     left: 5px;
     top: 5px;
      position: absolute;
      height: 65px;
      width: 65px;
      border-radius: 100%;
      background: rgb(223, 99, 16);
    }
  }
  .open{
    margin-top: 30px;
    border: 1px solid gold;
    border-radius: 20px;
    padding: 6px 10px 6px 30px;
    position: relative;
    font-size: 14px;
    color: gold;
    i{
      position: absolute;
      left: 5px;
      top: 4px;
      border-radius: 100%;
      height: 20px;
      width: 20px;
      background: gold;
    }
  }
}
</style>