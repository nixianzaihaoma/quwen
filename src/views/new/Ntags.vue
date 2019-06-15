<template>
  <div class="tags">
    <mt-header :title="type" fixed>
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
    </mt-header>
    <div
      class="newsbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="true"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <ul>
        <li v-for="(item,i) in newsLis" :key="i"  @click="toDetail(item.content,item.title,item.src,item.time)">
          <div class="right">
            <img :src="item.pic" alt>
          </div>
          <div class="left">
            <p class="title" v-text="item.title"></p>
            <p class="author" v-text="item.src"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  padding-top: 0.9rem;
}
.newsbox {
  padding: 0.22rem 0;
  li {
    padding: 0.22rem;
    border-bottom: 1px solid rgb(223, 222, 222);
    overflow: hidden;
    .left {
      float: right;
      width: 67%;
      .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 0.36rem;
        line-height: 0.45rem;
      }
      .author {
        font-size: 0.28rem;
        line-height: 0.6rem;
        color: #b4b4b4;
      }
    }
    .right {
      float: right;
      width: 33%;
      img {
        height: 1.4604rem;
        width: 100%;
      }
    }
  }
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      channel: null,
      page: 1,
      newsLis: [],
      type: null
    };
  },
  methods: {
    getLis() {
      let that = this;
      axios
        .get("http://api.wangshuwen.com/getNews", {
          params: {
            channel: that.type,
            page: that.page
          }
        })
        .then(res => {
          that.newsLis = [...that.newsLis, ...res.data.data];
          console.log(that.newsLis);
          that.page++;
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadMore() {
      this.getLis();
    },
    back() {
      this.$router.push({
        path: "/"
      });
    },
    toDetail(data,title,src,time) {
      sessionStorage.setItem("content", data);
      sessionStorage.setItem("title", title);
      sessionStorage.setItem("src", src);
      sessionStorage.setItem("time", time);
      this.$router.push({
        path: "/detail"
      });
    }
  },
  created() {
    this.type = this.$route.query.type;
    this.getLis();
  }
};
</script>
