<template>
  <div class="pic" v-infinite-scroll="loadMore" infinite-scroll-disabled="false" infinite-scroll-distance="10">
    <ul >
      <li v-for="(item,i) in imgLis" :key="i">
        <img v-gallery :src="item.shareUrl" :alt="item.title">
        <span v-text="item.title"></span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.pic {
  padding: 0.22rem;
  li {
    position: relative;
    overflow: hidden;
    margin-bottom: 0.2rem;
    span {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
      width: 100%;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0.6);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-indent:0.28rem;
    }
  }
  img {
    width: 100%;
    height: auto;
    float: left;
  }
}
</style>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      page: 1,
      imgLis: []
    };
  },

  methods: {
    getImg() {
      let that = this;
      axios
        .get("http://api.wangshuwen.com/getBeautyImages", {
          params: {
            page: that.page
          }
        })
        .then(function(response) {
          that.imgLis = [
            ...that.imgLis,
            ...response.data.data.imgs.slice(0, -1)
          ];
          console.log(that.imgLis);
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
      this.getImg();
    }
  },
  created() {
    this.getImg();
  }
};
</script>
