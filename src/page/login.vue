<template>
  <div>
    <h1 class="login-title">Hsuna聊天室</h1>
    <div class="login-head">
      <img src="/static/img/head/B001.jpg" width="100%" height="100%">
    </div>
    <cell form>
      <vwInput label="群昵称" input-config='{"type": "text", "placeholder": "输入2-10个字符"}'></vwInput>
      <vwInput label="密码" input-config='{"type": "text", "placeholder": "输入2-8个字符"}'></vwInput>
    </cell>
    <div class="weui-btn-area">
      <vwButton primary>登录</vwButton>
    </div>
  </div>
</template>

<script>
  import cell from 'vuwe/src/components/cellS/cell'
  import vwButton from 'vuwe/src/components/buttons/button'
  import vwInput from 'vuwe/src/components/forms/input'


  export default {
    data() {
      return {

      }
    },
    created () {
    },
    methods: {
    },
    components: {
      cell,
      vwButton,
      vwInput
    }
  }
</script>

<style>
  .login-title{
    text-align: center;
    margin: 6rem;
  }
  .login-head{
    width: 10rem;
    height: 10rem;
    margin: 8rem auto 2rem auto;
  }
</style>