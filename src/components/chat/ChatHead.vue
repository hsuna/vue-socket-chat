<template>
    <div class="chat-head">
        <span class="float-left"><i class="iconfont icon-back_android"></i></span>
        群名字(<slot></slot>)
        <span class="float-right"><i class="iconfont icon-friend_light"></i></span>
    </div>
</template>

<script>

</script>

<style>
    .chat-head{
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
