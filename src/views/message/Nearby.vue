<template>
  <div id="nearby">
    <div class="nearby-box">
      <div class="distance">
        <span>附近的人</span>
        <van-icon name="arrow-up" />
      </div>
      <div class="wrap">
        <div
          class="distance-main"
          v-for="(item, index) in nearbyMan"
          :key="index"
        >
          <img :src="item.img" alt="">
          <p>{{ item.name }}</p>
          <span>{{ item.distance }}</span>
        </div>
    </div>
  </div></div>
</template>

<script>
export default {
  data() {
    return {
      nearbyMan: [
        {
          name: "奥...",
          distance: "298m",
          img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1130889930,4152525514&fm=26&gp=0.jpg"
        },
        {
          name: "流年记忆",
          distance: "298m",
          img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1818481350,2511029271&fm=26&gp=0.jpg"
        },
        {
          name: "北洛",
          distance: "298m",
          img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=175914109,355291816&fm=26&gp=0.jpg"

        },
        {
          name: "发君",
          distance: "298m",
          img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1330799952,3611138158&fm=26&gp=0.jpg"

        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

#nearby {
  .nearby-box {
    background-color: #eee;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .distance {
      font-size: 25px;
      font-weight: 600;
      color: black;
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }
    .wrap {
      display: flex;
      .distance-main {
        display: flex;
        flex-direction: column;
        margin: auto;
        text-align: center;
        img {
          width: 70px;
          height: 70px;
          // background: red;
          border-radius: 50%;
          padding: 10px;

        }
        p {
          font-size: 12px;
          font-weight: 500;
        padding: 10px;

        }
        span {
          font-size: 10px;
        padding: 10px;

        }
      }
    }
  }
}
</style>