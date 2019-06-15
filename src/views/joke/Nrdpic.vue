<template>
  <div class="box">
    <mt-header title="随机美图" fixed>
        <mt-button icon="back" slot="left" @click="back">返回</mt-button>
    </mt-header>
 
    <div class="imgbox">
    
    <img v-if="istrue" :src='imgUrl' alt>
    </div>
      <span class="rand" @click="toggle">next</span>
  </div>
</template>
<style lang="scss" scoped>
.box {
  margin-top: 0.9rem;
}
.imgbox{
    padding: 1.3rem 0.11rem;
    img{
        width: 100%;
        height: auto;
    }
}
.rand{
    position: fixed;
    bottom: 0.3rem;
    right: 0.3rem;
    height: 1rem;
    width: 1rem;
    font-size: 0.36rem;
    color: white;
    line-height: 1rem;
    text-align: center;
    border-radius: 50%;
    background: #ee1a1a;
}
</style>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      imgUrl: 'https://uploadbeta.com/api/pictures/random/?key=%E6%B8%85%E7%BA%AF'
      ,istrue:true
    };
  },
  methods: {
    back() {
      this.$router.push({
        path: "/joke"
      });
    },
    toggle() {
      this.istrue = false;
      
      setTimeout(() => {
        this.istrue = true;  
      }, 1);
      
    },
  }
};
</script>
