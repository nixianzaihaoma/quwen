<template>
  <div class="newbox">
    <div class="tagsBox">
      <ul class="tags">
        <li v-text="'头条'" class="active"></li>
        <li v-for="(item,i) in lis" :key="i" v-text="item" @click="toTags(item)"></li>
      </ul>
    </div>
    <div
      class="newsbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="true"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <ul>
        <li v-for="(item,i) in newsLis" :key="i" @click="toDetail(item.content,item.title,item.src,item.time)">
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
.tagsBox {
  overflow-x: scroll;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #cccccc;
  padding: 0.15rem 0;
  .tags {
    white-space: nowrap;
    font-size: 0.3rem;
    li {
      display: inline-block;
      height: 0.3rem;
      line-height: 0.3rem;
      border-radius: 0.215rem;
      padding: 0.11rem 0.3rem;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}

.active {
  background: #f70000;
  color: white;
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
      lis: [
        "财经",
        "体育",
        "娱乐",
        "军事",
        "教育",
        "科技",
        "NBA",
        "股票",
        "星座",
        "女性",
        "健康",
        "育儿"
      ],
      index: 0,
      newsLis: [],
      page: 1
    };
  },
  methods: {
    getLis() {
      let that = this;
      axios
        .get("http://api.wangshuwen.com/getNews", {
          params: {
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
    toTags(item) {
      this.$router.push({
        path: "/tags",
        query: {
          type: item
        }
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
    this.getLis();
  }
};
</script>

