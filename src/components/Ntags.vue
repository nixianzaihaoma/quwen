<template>
  <div class="nav" :class="{'fixTop':istrue}">
    <div :class="{'is-select':focus==1}" @click="news">
      <span>
        热点时事
        <i></i>
      </span>
    </div>
    <div :class="{'is-select':focus==2}" @click="pictures">
      <span>
        美图
        <i></i>
      </span>
    </div>
    <div :class="{'is-select':focus==3}" @click="joke">
      <span>
        笑话
        <i></i>
      </span>
    </div>
  </div>
</template>
<script>
import { constants } from "crypto";

export default {
  mounted() {
    let navTop = document.querySelector(".nav").offsetTop;
    let that = this;
    function fixTop() {
      if (window.scrollY >= navTop) {
        that.istrue = true;
      } else {
        that.istrue = false;
      }
    }
    window.addEventListener("scroll", fixTop, true);
  },
  data() {
    return {
      num: 0,
      istrue: false,
      focus: 1
    };
  },
  methods: {
    news: function() {
      this.focus = 1;

      this.$router.push({ path: "/" });
    },

    pictures: function() {
      this.focus = 2;
      this.$router.push({ path: "/picture" });
    },

    joke: function() {
      this.focus = 3;
      this.$router.push({ path: "/joke" });
    }
  },
  created() {
      let name = this.$router.history.current.name
      if(name == 'News'){
          console.log(this.focus)
          this.focus = 1
      }
     if(name == 'Picture'){
         console.log(this.focus)
          this.focus = 2
      }
      if(name == 'Jock'){
          console.log(this.focus)
          this.focus = 3
      }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  height: 0.9rem;
  font-size: 0.24rem;
  align-items: center;
  background: white;
  width: 100%;
  z-index: 999;
  div {
    width: 33.33333%;
    float: left;
    height: 0.9rem;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.9rem;
    background: white;
    span {
      display: inline-block;
      position: relative;
      height: 100%;
      line-height: 0.9rem;

      i {
        position: absolute;
        height: 0.04rem;
        width: 100%;
        bottom: -1px;
        left: 0;
      }
    }
  }
  .is-select {
    span {
      color: #ee1a1a;
    }
    i {
      background: #ee1a1a;
    }
  }
}
.fixTop {
  position: fixed;
  top: 0;
  left: 0;
  background: #ee1a1a;
  color: white;
  div {
    background: #ee1a1a;
  }
  .is-select {
    span {
      color: white;
    }
    i {
      background: white;
    }
  }
}
</style>
