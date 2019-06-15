<template>
  <div class="box">
    <div class="tagsBox">
      <ul class="tags">
        <li
          v-for="(item,i) in lis"
          :key="i"
          v-text="item"
          @click="active(item,i)"
          :class="{'active':index==i}"
        ></li>
      </ul>
    </div>
    <div 
              v-infinite-scroll="loadMore"
      infinite-scroll-disabled="true"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check='false'
    >
    <ul
      class="ulbox"
    >
      <li class="jokeli" v-for="(item,i) in jokeLis" :key="i">
        <p class="user">
          <img class="hea" :src="item.header" />
          <span class="name" v-text="item.username"></span>
        </p>
        <p class="title" v-text="item.text"></p>
        <img
          v-gallery
          v-if="item.type=='gif'"
          onerror="this.src='http://wx.qlogo.cn/mmopen/NsXicLUicickpdTMVMseD8RicPPk963jeXecicoeg2UansnICYRPEqyIRDpjzQJWCltARbWqsF1WFUyysEUvCPSOiaZGk6L7FsOeBM/0'"
          :src="item.gif"
          alt
        >
        <img v-gallery v-if="item.type=='image'" onerror="this.src='http://wx.qlogo.cn/mmopen/NsXicLUicickpdTMVMseD8RicPPk963jeXecicoeg2UansnICYRPEqyIRDpjzQJWCltARbWqsF1WFUyysEUvCPSOiaZGk6L7FsOeBM/0'" :src="item.image" alt>
        <video v-if="item.type=='video'" :src="item.video" controls :poster="item.thumbnail"></video>
        <p class="comment">
          <span class="iconfont icon-icon-zanmei"></span>
          <span class="cli" v-text="item.forward"></span>
          <span class="iconfont icon-bianbian"></span>
          <span class="cli" v-text="item.down"></span>
        </p>
        <p class="discuss" v-if="item.top_commentsContent!=null">
            <span class="tips" v-text="'神评'"></span>
            <span class="tolkname" v-text="item.top_commentsName"></span>：
            <span v-text="item.top_commentsContent"></span>
        </p>
      </li>
    </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ulbox {
  background: #cccccc;

  .jokeli {
    margin-top: 0.15rem;
    padding: 0.11rem;
    background: #ffffff;
    text-align: center;
    .user {
      height: 0.8rem;
      line-height: 0.8rem;
      .hea {
        display: inline-block;
        height: 0.6rem;
        width: 0.6rem;
        vertical-align: middle;
        border-radius: 50%;
        background: url("http://wx.qlogo.cn/mmopen/NsXicLUicickpdTMVMseD8RicPPk963jeXecicoeg2UansnICYRPEqyIRDpjzQJWCltARbWqsF1WFUyysEUvCPSOiaZGk6L7FsOeBM/0")
          no-repeat 0 0;
        background-size: 0.6rem 0.6rem;
        float: left;
        margin-top: 0.1rem;
      }
      .name {
        font-size: 0.28rem;
        color: #999;
        margin: 0 0.2rem 0;
        float: left;
      }
    }
    .title {
      text-align: left;
      padding: 0.1rem 0;
      font-size: 0.32rem;
      line-height: 0.4rem;
    }
    > img,
    video {
      height: 5rem;
      max-width: 100%;
    }
    .comment {
      font-size: 0.32rem;
      text-align: left;
      padding: 0.11rem 0;
      .cli {
        color: #999;
        font-size: 0.3rem;
        margin: 0 0.2rem 0 0.1rem;
      }
    }


    .discuss{
        text-align: left;
        font-size: 0.32rem;
        padding: 0.15rem 0.1rem;
        line-height: 0.5rem;
        background: #f4f4f4;
        border-radius: 0.15rem;
        color: #666;
        .tips{
            color: white;
            background: red;
            line-height: 0.4rem;
            padding: 0 0.1rem;
            border-radius: 0.2rem;
            font-size: 0.36rem;
            margin-right: 0.1rem;
        }
        .tolkname{
            color: #999;
        }
    }
  }
}
.user .box {
  padding: 0 0.11rem;
}
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
</style>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      lis: ["推荐", "文字", "图片", "gif图", "视频", "随机美图"],
      tolis: ["/joke", "/work", "/pic", "/gif", "/video", "/rdpic"],
      index: 0,
      jokeLis: [],
      page: 1
    };
  },
  methods: {
    active(item, i) {
      this.$router.push({
        path: this.tolis[i],
        query: {
          type: item
        }
      });
    },
    getlis() {
      let that = this;
      axios
        .get("https://www.apiopen.top/satinGodApi", {
          params: {
            type: 1,
            page: that.page
          }
        })
        .then(function(response) {
          that.jokeLis = [...that.jokeLis, ...response.data.data];
          console.log(that.jokeLis);
          that.page++;
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    loadMore() {
      this.getlis();
    }
  },
  created() {
    this.getlis();
  }
};
</script>


