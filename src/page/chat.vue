<template>
    <div>
        <chat-head>{{chatinfo.onlineCount}}</chat-head>
        <chat-body :chats="chatinfo.chats"></chat-body>
        <chat-foot @sendmsg="sendMessage"></chat-foot>
    </div>
</template>

<script>
    import ChatHead from '../components/chat/ChatHead'
    import ChatBody from '../components/chat/ChatBody'
    import ChatFoot from '../components/chat/ChatFoot'

    import userinfo from '../util/userinfo'
    import chatinfo from '../util/chatinfo'

    export default {
        data() {
            return {
                chatinfo:chatinfo.get()
            }
        },
        created (){
        },
        methods:{
            sendMessage(content){
                var user = userinfo.get();
                this.$socket.emit('message', Object.assign(user, {content}));
            }
        },
        components: {
            ChatHead,
            ChatBody,
            ChatFoot
        }
    }
</script>
