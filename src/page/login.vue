<template>
  <div>
    <div class="login-title">
      <img class="" :src="'./static/img/title/'+title+'.jpg'" width="100%">
    </div>
    <div class="login-head" >
      <img :src="'./static/img/head/'+user.userhead+'.jpg'" width="100%" height="100%" @click="headClick">
    </div>
    <div class="weui-cells_form weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">群昵称</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" placeholder="输入2-10个字符" class="weui-input" v-model="user.username">
        </div>
      </div>
      <!--<div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">密码</label>
        </div>
        <div class="weui-cell__bd">
          <input type="text" placeholder="输入2-8个字符" class="weui-input">
        </div>
      </div>-->
    </div>
    <div class="weui-btn-area">
      <button type="button" class="weui-btn_primary weui-btn" @click="loginClick">登录</button>
    </div>
  </div>
</template>

<script>
  import userinfo from '../util/userinfo'

  function getTitleSrc(){
    let tmpStr = '000' + Math.floor(Math.random() * 9 + 1);
    return tmpStr.substr(-3, 3);
  }

  export default {
    data() {
      return {
        title:getTitleSrc(),
        user:{
          userhead:userinfo.getNewUserHead(),
          userid:userinfo.getNewUserId(),
          username:'',
        }
      }
    },
    created () {
    },
    methods: {
      loginClick: function(val){
        // $socket is socket.io-client instance
        if('' == this.user.username.trim()){
          this.$toast({content: '群昵称不能为空'})
          return;
        }
        let flag = userinfo.set(this.user);
        if(flag){
          this.$socket.emit('login', userinfo.get());
        }
      },
      headClick: function(){
        this.user.userhead = userinfo.getNewUserHead();
      }
    },
    components: {
    }
  }
</script>

<style>
  .login-title{
    margin: 4rem 5rem 3rem 5rem;
    text-align: center;
  }
  .login-head{
    width: 9rem;
    height: 9rem;
    margin: 2rem auto;
  }
</style>
