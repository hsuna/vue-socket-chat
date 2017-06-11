<template>
    <div class="chat-head">
        <span class="float-left" @click="backClick"><i class="iconfont icon-back_android"></i></span>
        聊天信息(<slot></slot>)
    </div>
</template>

<script>
    export default {
        created (){

        },
        methods: {
            backClick(){
                this.$router.back();
            }
        }
    }
</script>

<style>
    .chat-head{
        position: relative;
        z-index: 2;
        padding: .5rem;
        text-align: center;
        background-color: #000;
        font-size: 2rem;
        color: #fff;
    }
    .chat-head .iconfont{
        line-height: 1;
        font-size: 3rem;
    }
</style>
