<template>
  <div class="sys-wrap">
    <div class="sys-wrap-msg">
      <slot></slot> 加入群聊
    </div>
  </div>
</template>

<script>

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
