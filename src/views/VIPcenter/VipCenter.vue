<template>
  <div class="main">
    <div class="skill">
 <van-nav-bar title="会员中心" left-arrow @click-left="onClickLeft" />
  <vip-user></vip-user>
    </div>
 
  <vip-advertising></vip-advertising>
  <vip-growing></vip-growing>
  <vip-exclusive></vip-exclusive>
  <vip-balance></vip-balance>
  <vip-privilege></vip-privilege>
  <vip-mall></vip-mall>
  <vip-clear></vip-clear>
  </div>
</template>

<script>
import VipUser from './VipUser.vue'
import VipAdvertising from './Vipadvertising.vue'
import VipGrowing from './Vipgrowing.vue'
import VipExclusive from './VipExclusive.vue'
import VipBalance from './VipBalance.vue'
import VipPrivilege from './Vipprivilege.vue'
import VipMall from './VipMall.vue'
import VipClear from './Vipclear.vue'
export default {

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  components:{
    VipUser,
    VipAdvertising,
    VipGrowing,
    VipExclusive,
     VipBalance,
      VipPrivilege,
      VipMall,
      VipClear,
  }
};
</script>

<style lang="scss" scoped>

.main{
  background: rgb(240, 238, 238);
  .skill{
    position: sticky;
    top: 0;
    z-index: 10;
  }
}

.van-icon-arrow-left::before {
  color: #000;
  font-weight: bold;
}
.van-nav-bar__title {
  font-weight: bold;
}
</style>
