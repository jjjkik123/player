<template>
  <div>
      <keep-alive>
        <header>
        <div class="left">
            <div
            v-for="(item, index) in headerList"
            :key="index"
            :class="{ active: activeIndex == index }"
            @click="selected(index,item.url)"
            >
            {{ item.title }}
            </div>
        </div>
        <div class="right">
            <van-icon name="music-o" size="28" />
            <div class="btn">发布</div>
        </div>
        </header>
      </keep-alive>
   
  </div>
</template>
 <script>
export default {
  data() {
    return {
      headerList: [
        {
          title: "朋友圈",
          url: "/friendcircle",
        },
        {
          title: "推荐",
          url: "/recommend",
        },
        {
          title: "关注",
          url: "/focus",
        },
      ],
      activeIndex: localStorage.getItem('activeIndex') || 0,
    };
  },
  mounted() {},
  components: {},
  methods: {
    selected(index,url) {
      localStorage.setItem('activeIndex',index)
      this.activeIndex = index;
      this.$router.push(url)
    },
  },
};
</script>
<style lang='scss' scoped>
.active {
  font-size: 20px;
  font-weight: bold;
}
header {
  position: fixed;
  top: 0;
  z-index: 222;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: #b6b6b6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    height: 100%;
    width: 200px;
    div {
      width: 60px;
      text-align: center;
    }
  }
  .right {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 44px;
      height: 26px;
      background-color: yellow;
      border-radius: 2px;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      line-height: 26px;
    }
  }
}
</style>