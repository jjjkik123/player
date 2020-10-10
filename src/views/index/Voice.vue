<template>
  <div class="wrap">
    <div id="voice">
      <div class="live" v-for="(item, index) in voice" :key="index">
        <div class="title">
          <span>{{ item.title }}</span>
          <span class="number">{{ item.number }}</span>
        </div>
        <div class="footer">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>

import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      voice: [
        {
          title: "关注在播",
          number: "55",
          desc: "我很容易满足",
        },
        {
          title: "还未开播",
          number: "143",
          desc: "我很容易满足",
        },
        {
          title: "等待关注",
          number: "79",
          desc: "我很容易满足",
        },
      ],
    };
  },
  created() {
    this.scroll();
  },
  methods: {
    async scroll() {
      await this.$nextTick();
      let bs = new BScroll(".wrap", { // eslint-disable-line no-unused-vars
        scrollX: true,
        // click: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 350px;
  overflow: hidden;
  align-self: center;
}
#voice {
  // width: 350px;
  align-self: center;
  height: 140px;
  display: inline-flex;
  // overflow: auto;

  .live {
    flex-shrink: 0;
    width: 130px;
    height: 130px;
    background-color: black;
    border-radius: 6px;
    padding: 10px;
    margin-right: 10px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      height: 24px;
      display: flex;
      justify-content: space-between;

      span:first-of-type {
        padding: 5px;
        border-radius: 4px;
        font-size: 11px;
        background: #fff234;
      }
      .number {
        font-size: 11px;
        color: white;
        margin-top: 8px;
      }
    }

    .footer {
      height: 16px;
      font-size: 15px;
      font-weight: bold;
      color: white;

      font-family: PingFang;
    }
  }
}
</style>