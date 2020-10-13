<template>
  <div class="friendCircleWrap">
      <top-wall></top-wall>
      <friend-dynamic></friend-dynamic>
  </div>
</template>
 <script>
 import TopWall from './TopWall'
 import FriendDynamic from './FriendDynamic'
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
      TopWall,
      FriendDynamic
  },
  methods: {},
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    const e=localStorage.getItem('activeIndex')
    console.log(e);
    localStorage.setItem('activeIndex',0)
    const r=localStorage.getItem('activeIndex')
    console.log(r);
    next()
  },
};
</script>
<style lang='scss' scoped>
.friendCircleWrap {
  padding: 0 15px;
  margin-top: 80px;
 
}
</style>