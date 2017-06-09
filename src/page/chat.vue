<template>
    <div>
        <chat-head v-bind:onlineCount="onlineCount">{{onlineCount}}</chat-head>
        <chat-body v-bind:chats="chats"></chat-body>
        <chat-foot @sendmsg="sendMessage"></chat-foot>
    </div>
</template>

<script>
    import ChatHead from '../components/chat/ChatHead'
    import ChatBody from '../components/chat/ChatBody'
    import ChatFoot from '../components/chat/ChatFoot'

    import userinfo from '../util/userinfo'

    export default {
        data() {
            return {
                onlineCount:0,
                chats:[]
            }
        },
        created (){
            if(!userinfo.isLogin()){
                this.$router.push('/');
            }
        },
        methods:{
            sendMessage(content){
                this.$socket.emit('message', {
                    userid:userinfo.getUserId(),
                    username:userinfo.getUserName(),
                    content:content
                });
            }
        },
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            login: function(obj){
                let chat;
                if(obj.user.userid == userinfo.getUserId()){
                    chat = {
                        type:'system',
                        name:'我'
                    }
                }else{
                    chat = {
                        type:'system',
                        name:obj.user.username
                    }
                }
                this.onlineCount = obj.onlineCount;
                this.chats.push(chat);
            },
            message:function(obj){
                let chat;
                if(obj.userid == userinfo.getUserId()){
                    chat = {
                        type:'self',
                        name:obj.username,
                        msg:obj.content
                    }
                }else{
                    chat = {
                        type:'other',
                        name:obj.username,
                        msg:obj.content
                    }
                }
                this.chats.push(chat);
            }
        },
        components: {
            ChatHead,
            ChatBody,
            ChatFoot
        }
    }
</script>