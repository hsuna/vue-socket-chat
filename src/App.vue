<template>
    <div>
        <router-view class="view" keep-alive transition transition-mode="out-in">
        </router-view>
    </div>
</template>

<script>
    import userinfo from './util/userinfo'
    import chatinfo from './util/chatinfo'

    export default {
        created () {
        if (userinfo.isLogin()) {
            this.$socket.emit('login', userinfo.get());
        }
    },
    sockets:{
        connect(){
            console.log('socket connected')
        },
        login(obj){
            if (!userinfo.isLogin()) return;

            let chat = {
                type:'system',
                name:'我',
                status:1
            };

            chatinfo.updateOnlineCount(obj.onlineCount);
            chatinfo.updateOnlineUsers(obj.onlineUsers);

            if(userinfo.isSelf(obj.user.userid)){
                chatinfo.addChat(chat);
                this.$router.push('/chat');
            }else{
                chat.name = obj.user.username;
                chatinfo.addChat(chat);
            }
        },
        logout(obj){
            if (!userinfo.isLogin()) return;

            if(userinfo.isSelf(obj.user.userid)){
                userinfo.del();
                chatinfo.clearChat();
                this.$router.push('/login');
            }else{
                let chat = {
                    type:'system',
                    name:obj.user.username,
                    status:0
                }
                chatinfo.updateOnlineCount(obj.onlineCount);
                chatinfo.updateOnlineUsers(obj.onlineUsers);
                chatinfo.addChat(chat);
            }
        },
        message(user){
            if (!userinfo.isLogin()) return;

            let chat;
            if(user.userid == userinfo.getUserId()){
                chat = Object.assign(user, {type:'self'});
            }else{
                chat = Object.assign(user, {type:'other'});
            }
            chatinfo.addChat(chat);
        }
    }
    }
</script>
