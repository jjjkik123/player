<template>
  <div class="contaner">
      <div class="in">
          <span>V点余额: 0</span>
          <span class="iconfont icon-benzi"></span>
          <span>今日可领取点: 0</span>
          <div>领取</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .contaner{
       
       font-size: 14px;
        padding: 18px;
        margin-top: 90px;
    .in{
         display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: rgb(255, 255, 255);
         width: 100%;
        height: 70px;
        border-radius: 10px;
        .icon-benzi{
            margin-right: 30px;
        }
        >div{
            color: #fff;
            padding: 7px;
            background: rgb(229, 230, 228);
            border-radius: 15px;

        }
    }
    }
</style>