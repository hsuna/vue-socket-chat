<template>
    <div class="chat-head">
        <span class="float-left" @click="backClick"><i class="iconfont icon-back_android"></i></span>
        梅丽号(<slot></slot>)
        <span class="float-right" @click="settingClick"><i class="iconfont icon-friend_light"></i></span>
    </div>
</template>

<script>
    export default {
        created (){

        },
        methods: {
            backClick(){
                this.$dialog({
                    title:'温馨提示',
                    content:'确定退出聊天窗口?',
                    assistBtn: '取消',
                    mainBtn: '确定',
                    assistFn () {},
                    mainFn () {
                        window.opener=null;
                        window.close();
                    }
                })
            },
            settingClick(){
                this.$router.push('/setting');
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
