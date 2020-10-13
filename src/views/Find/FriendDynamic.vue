<template>
  <div>
    <div class="dynamicWrap" v-for="(item, index) in pageList" :key="index">
      <div class="friend">
        <img :src="item.headImg" alt="" />
        <div>
          <p>{{ item.writer }}</p>
          <p>{{ item.time }}</p>
        </div>
      </div>
      <div class="title">
        {{ item.content }}
      </div>
      <div class="match" v-if="item.contentImg">
        <img :src="item.contentImg" alt="" />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.intro }}</p>
        </div>
      </div>
      <div class="topic" v-if="item.contentImg">
        <span># {{ item.title }}</span> |
        <span @click="focus(item.writer, index)" v-if="shows != index">
          关注
        </span>
        <span
          @click="focusReverse(item.writer, index)"
          :class="{ active: shows == index }"
          v-if="shows == index"
        >
          已关注
        </span>
      </div>
      <div class="like">
        <div class="love">
          <van-icon name="like-o" size="20px" />
          <span>{{ item.collect }}w</span>
        </div>
        <div class="love">
          <van-icon name="chat-o" size="20px" />
          <span>{{ item.comment }}k</span>
        </div>
        <div class="love">
          <van-icon name="share-o" size="20px" />
          <span>{{ item.reader }}k</span>
        </div>
        <div class="love">
          <van-icon name="fire-o" size="20px" />
          <span>{{ item.relay }}k</span>
        </div>
      </div>
      <div class="comments">
        <div class="onecom" v-for="(item, index) in item.onecomments" :key="index">
          <span class="author">{{ item.nickname }} :</span>
          <!-- <span class="oneComment">{{ commentMsg }}</span>   -->
          <span class="oneComment">{{ item.msg }}</span>
        </div>
      </div>
      <div class="comment">
        <input @input="change1($event)"   type="text" placeholder="说点什么" />
        <button @click="input($event,index)">发送</button>
      </div>
    </div>
  </div>
</template>
 <script>
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { comment } from "../../utils/api";

export default {
  data() {
    return {
      shows: 33,
      msg: "",
      commentMsg: "",
    };
  },
  mounted() {
    this.getDyanamic();
    this.comment();
    this.getPageList();
  },
  computed: {
    ...mapState("FindModule", {
      dynamicList: "dynamicList",
      commentList: "commentList",
      pageList: "pageList",
    }),
    ...mapState("IndexModule", {
      login: "login",
    }),
  },
  components: {},
  methods: {
    ...mapActions("FindModule", ["getDyanamic", "comment","getPageList"]),
    focus(value, index) {
      this.shows = index;
      Toast("关注成功");
      localStorage.setItem(`${value}`, value);
    },
    change1(event){
      this.msg = event.target.value;
    },

    focusReverse() {
      this.shows = 33;
    },
    input(event,index) {
      if (this.msg && this.login.username) {
        const user = sessionStorage.getItem("username");
        this.commentMsg = this.msg;
        const usr = JSON.parse(user);
        const _id = usr._id;
        const nickname = usr.nickname;
        const pid = this.pageList[index]._id
        comment({ msg: this.msg, uid: _id, nickname,pid });
        this.getPageList();
        event.target.previousSibling.value =""
      } else {
        Toast("请先登录");
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.dynamicWrap {
  margin-top: 20px;
  margin-bottom: 50px;
  // background-color: aquamarine;
  .friend {
    width: 100%;
    height: 40px;
    display: flex;
    img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
    }
    div {
      margin-top: 4px;
      margin-left: 7px;
      & p:nth-child(1) {
        font-size: 13px;
        color: #333333;
      }
      & p:nth-child(2) {
        font-size: 11px;
        margin-top: 4px;
        color: #666666;
      }
    }
  }
  .title {
    font-size: 15px;
    color: #333333;
    margin: 10px 0 30px;
    text-indent: 30px;
  }
  .match {
    width: 100%;
    height: 94px;
    background-color: #f7f8fa;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    img {
      width: 73px;
      height: 73px;
      border-radius: 10px;
    }
    div {
      margin-left: 10px;
      & p:nth-child(1) {
        font-size: 15px;
        margin-top: 15px;
      }
      & p:nth-child(2) {
        font-size: 12px;
        margin-top: 15px;
        color: gray;
      }
    }
  }
  .comments {
    font-size: 11px;
    color: rgb(128, 128, 128);
    padding: 5px 15px;
    background-color: rgba(235, 235, 235, 0.521);
    .onecom {
      border-radius: 10px;
      margin-top: 6px;
      .author {
        // line-height: 16px;
        display: inline-block;
        margin-right: 12px;
        // padding-top: 4px;
      }
    }
  }
  .topic {
    margin: 15px 0;
    width: 155px;
    height: 26px;
    border-radius: 13px;
    background-color: #f7f8fa;
    font-size: 11px;
    line-height: 26px;
    text-align: center;
    & span:last-child {
      color: rgb(0, 204, 153);
    }
  }
  .like {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .love {
      width: 25%;
      display: flex;
      justify-content: center;
      span {
        font-size: 10px;
        color: gray;
        margin: 6px 3px;
      }
    }
  }
  .comment {
    width: 100%;
    height: 42px;
    input {
      height: 42px;
      width: 290px;
      background-color: #f7f8fa;
      border-radius: 6px;
      border: none;
      text-indent: 10px;
    }
    button {
      background-color: #fff;
      border: none;
    }
  }
}
.active {
  color: gray !important;
}
</style>