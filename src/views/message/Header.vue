<template>
  <div id="Message-header">
    <div class="header-box">
      <van-tabs line-width="0px" v-model="active" @change="selected">
        <van-tab
          :title="item.title"
          v-for="(item, index) in messageBar"
          :key="index"
          :to="item.src"
         
        ></van-tab>
      </van-tabs>
      <van-icon name="add-o" />
    </div>


  </div>
</template>


<script>
export default {
  data() {
    return {
      messageBar: [
        {
          title: "聊天",
          src: "/message",
        },
        {
          title: "推荐",
          src: "/msgrecommend",
        },
        {
          title: "好友",
          src: "",
        },
        {
          title: "群组",
          src: "",
        },
      ],
      active:+sessionStorage.getItem('active') || 0
    };
  },
 
  methods:{
     selected(name) {
       console.log(name);
      sessionStorage.setItem('active',name)
      
    },
  },

  mounted() {
    console.log(this.active)
  }
};
</script>


<style lang="scss" >
#Message-header {
  .header-box {
    display: flex;
    justify-content: space-between;
    .van-tabs {
      width: 260px;
      .van-tab--active {
        font-size: 20px;
        font-weight: 900;
      }
      
    }
    .van-icon {
      font-size: 20px;
      margin-top: 10px;
      font-weight: 800;
    }
  }
}
</style>