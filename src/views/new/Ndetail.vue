<template>
    <div class="detail">
        <mt-header  :title="getTitle()"  fixed>
            <mt-button icon="back" slot="left" @click="back">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <p class="title" v-text="getTitle()">

            
        </p>
        <p class="time"><span v-text="getTime()"></span> <span style="margin-left:0.3rem" v-text="getSrc()"></span></p>
        <div class="detailcontent" v-html="getContent()"></div>
    </div>
</template>
<style lang="scss" >
.detail{
    padding-top: 0.9rem;
    background: #f5f5f5;
    overflow: hidden;

.title{
    padding: 0.54rem 0.3rem 0;
    color: #404040;
    font-weight: bold;
    font-size: .46rem;
    line-height: 0.6rem;
}
.time{
    margin-top: 0.15rem;
    font-size: 0.28rem;
    color: #888888;
    padding:0 0.3rem ;
}
.video{
    width: 100%;
    video{
        width: 100%;
        height: auto;
    }
    a{
        display: none;
    }
}
.detailcontent{
    padding:0 0.3rem ;
    p{
        margin: 0.6rem 0;
        text-indent: 0.72rem;
        font-size: 0.36rem;
        line-height: 1.5em;
        word-break: break-all;
        color: #404040;
    }
    .otitle{
        text-indent: 0;
        text-align: justify;
    }
    .editor{
        text-indent: 0;
        text-align: right;
    }
    .photo{
        img{
            width: 100%;
            height: auto;
        }
        span{
            font-size: 0.3rem;
        }
    }
}
}
</style>

<script>
export default {
    data(){
        return{
            content:null
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        getContent(){
            return sessionStorage.getItem("content");
        },
        getTitle(){
            return sessionStorage.getItem("title");
        },
        getSrc(){
            return sessionStorage.getItem("src");
        },
        getTime(){
            return sessionStorage.getItem("time");
        },
    },
}
</script>

