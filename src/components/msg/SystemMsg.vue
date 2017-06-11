<template>
  <div class="sys-wrap">
    <div class="sys-wrap-msg">
        <slot name="name"></slot>
        <template v-if="status=='1'">加入群聊</template>
        <template v-if="status=='0'">退出群聊</template>
    </div>
  </div>
</template>

<script>
    export default {
        props:["status"]
    }
</script>

<style>
    .sys-wrap{
        text-align: center;
        font-size: 1.4rem;
        color: #000;
    }
    .sys-wrap-msg{
        display: inline-block;
        padding: 0.3rem 0.6rem;
        border-radius: .5rem;
        background-color: #ccc;
    }
</style>
