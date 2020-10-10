<template>
  <div class="mine">
    <m-header></m-header>
    <m-character></m-character>
    <m-features></m-features>
    <m-personal></m-personal>
    <m-account></m-account>
    <m-service></m-service>
    <router-view></router-view>
  </div>
</template>
<script>
import MHeader from "./Mine/M-Header";
import MCharacter from "./Mine/M-character";
import MFeatures from "./Mine/M-Features";
import MPersonal from "./Mine/M-personal";
import MAccount from "./Mine/M-account";
import MService from "./Mine/M-service";

export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
    MHeader,
    MCharacter,
    MFeatures,
    MPersonal,
    MAccount,
    MService,
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
