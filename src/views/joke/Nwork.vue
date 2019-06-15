<template>
<div class="box">
    <mt-header title="文字段子" fixed='true'>
        <mt-button icon="back" slot="left" @click="back">返回</mt-button>
    </mt-header>
  <ul
      class="ulbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
        <li class="jokeli" v-for="(item,i) in jokeLis" :key="i">
         <p class="user">
          <img class="hea" :src="item.header" alt/>
          <span class="name" v-text="item.username"></span>
        </p>
        <p class="title" v-text="item.text"></p>
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
</template>
<style lang="scss" scoped>
.box{
    margin-top: 0.9rem;
}
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
</style>
<script>
const axios = require("axios");
export default {
     data() {
    return {
      jokeLis: [],
      page: 1
    };
  },
  methods:{
       back(){
          this.$router.push({
              path:'/joke'
          })
      },
          getlis() {
      let that = this;
      axios
        .get("https://www.apiopen.top/satinGodApi", {
          params: {
            type: 2,
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
  }
}
</script>

