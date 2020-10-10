<template>
  <div id="Message">
      <message-header></message-header>
      <!-- <message-nearby></message-nearby>
      <message-chatting></message-chatting> -->
      <router-view></router-view>
  </div>
</template>

<script>
import MessageHeader from "./message/Header";
// import MessageNearby from "./message/Nearby";
// import MessageChatting from "./message/Chatting";

export default {
    data(){
        return{}
    },
    components:{
        MessageHeader,
        // MessageNearby,
        // MessageChatting,
    }

}
</script>

<style lang="scss">
    #Message{
        padding: 15px;
    }
</style>