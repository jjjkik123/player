<template>
  <div>
    <van-nav-bar
  title="登录"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-cell-group>
      <van-field  label="用户名：" v-model="username" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码：" type='password' placeholder="请输入密码" />
    </van-cell-group>
    <van-button block size='small' type="info" @click='login'>登录</van-button>
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    loginInfo() {
      return this.$store.state.IndexModules.login
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async login() {
      await this.$store.dispatch('IndexModule/login',{username:this.username,password:this.password})
      if(sessionStorage.getItem('username')) {
        this.$router.go(-1)
      } else {
        Toast.fail('账号密码错误');
      }
    }
  },
};
</script>
<style lang="scss">
</style>