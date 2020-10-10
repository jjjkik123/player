<template>
  <div class="contaner">
    <div class="in">
      <div class="grow">
        <h5>我的成长</h5>
      </div>
      <div class="grade">
        <span>LV0</span>
        <address>LV0</address>
      </div>
      <div class="Article"></div>
      <div class="advanced">
        晋级成长值: 0
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contaner {
  margin-top: 40px;
  padding: 0 18px;
  font-size: 14px;
 
  .in {
       padding: 20px 18px 10px 18px;
    border-radius: 10px;
    height: 150px;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .grow {
      width: 100%;
      float: left;
      font-size: 18px;
    }
    .grade {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .Article {
      width: 100%;
      height: 7px;
      border-radius: 3px;
      background: rgb(235, 233, 233);
    }
    .advanced {
      padding: 8px;
      background: rgb(245, 245, 245);
      border-radius: 16px;
    }
  }
}
</style>
