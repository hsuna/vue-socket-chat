<template>
    <div class="chat-body">
        <div class="chat-body-bg">
          <template v-for="chat in chats">
            <selfMsg v-if="chat.type == 'self'">
              <img slot="head" src="/static/img/head/B001.jpg" width="100%" height="100%"/>
              <template slot="name">我</template>
              <template slot="msg">{{chat.msg}}</template>
            </selfMsg>
            <otherMsg v-if="chat.type == 'other'">
              <img slot="head" src="/static/img/head/B001.jpg" width="100%" height="100%"/>
              <template slot="name">{{chat.name}}</template>
              <template slot="msg">{{chat.msg}}</template>
            </otherMsg>
            <systemMsg v-if="chat.type == 'system'">
              {{chat.name}}
            </systemMsg>
          </template>
        </div>
    </div>
</template>

<script>
  import selfMsg from '../msg/SelfMsg.vue'
  import otherMsg from '../msg/OtherMsg.vue'
  import systemMsg from '../msg/SystemMsg.vue'

  export default {
    props:["chats"],
    components: {
      selfMsg,
      otherMsg,
      systemMsg
    }
  }
</script>

<style>
  .chat-body, .chat-body-bg{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .chat-body{
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 3.7rem;
    padding-bottom: 4.2rem;
  }
  .chat-body-bg{
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    background-color: #F2F2F2;
  }
  .chat-body-bg>div{
    padding: .8rem;
  }
</style>
