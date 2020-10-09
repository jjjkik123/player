<template>
  <div id="gambit">
    <div class="top">
      <div class="bulk"></div>
      <div class="bulk"></div>
      <div class="bulk"></div>
      <div class="bulk"></div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#gambit {
  align-self: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  .top {
    height: 150px;
    background-color: yellow;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;
    .bulk {
      width: 170px;
      height: 70px;
      background-color: red;
       border-radius: 6px;
    }
  }
  .bottom {
    height: 70px;
    background-color: yellow;
   
  }
}
</style>