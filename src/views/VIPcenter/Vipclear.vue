<template>
  <div class="contaner">
    <div class="top">会员服务协议</div>
    <div class="bottom">立即开通</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contaner{
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    font-size: 16px;
    .top{
        display: flex;
        font-weight: bold;
        margin: 15px;
    }
    .bottom{
        display: flex;
        justify-content: center;
         align-items: center;
        font-size: 20px;
        font-weight: bold;
        background: gold;
        width: 90%;
        padding: 20px 0;
        border-radius: 10px;
    }
}
</style>