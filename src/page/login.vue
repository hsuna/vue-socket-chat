<template>
  <div>
    <h1 class="login-title">Hsuna聊天室</h1>
    <div class="login-head">
      <img src="/static/img/head/B001.jpg" width="100%" height="100%">
    </div>
    <div class="weui-cells_form weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">群昵称</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" placeholder="输入2-10个字符" class="weui-input" v-model="username">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">密码</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" placeholder="输入2-8个字符" class="weui-input">
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <button type="button" class="weui-btn_primary weui-btn" @click="clickButton">登录</button>
    </div>
  </div>
</template>

<script>
  import userinfo from '../util/userinfo'

  export default {
    data() {
      return {
        userid:new Date().valueOf(),
        username:''
      }
    },
    created () {
    },
    methods: {
      clickButton: function(val){
        // $socket is socket.io-client instance
        var flag = userinfo.set({
          userid:this.userid,
          username:this.username
        });
        if(flag){
          this.$socket.emit('login', {
            userid:this.userid,
            username:this.username
          });
          this.$router.push('/');
        }
      }
    },
    components: {
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