<template>
  <div id=" M-Header">
    <van-nav-bar >
      <template #right>
        <svg class="icon head" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
       <span class="iconfont icon-erweima head"></span>
      </template>
      
    </van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.head{
color: black;
font-size:  20px ;
// font-weight: 900;
margin-left: 20px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
