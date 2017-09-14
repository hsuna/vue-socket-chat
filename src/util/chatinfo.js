/**聊天信息  */
let data={
    chats:[],
    onlineCount:0,
    onlineUsers:{}
}

export default {
    get(){
        return data;
    },

    getChats(){
        return data.chats;
    },
    addChat(obj){
        data.chats.push(obj);
        return data.chats;
    },
    clearChat(){
        data.chats = [];
    },

    getOnlineCount(){
        return data.onlineCount;
    },
    updateOnlineCount(count){
        data.onlineCount = count;
    },

    getOnlineUserst(){
        return data.onlineUsers;
    },
    updateOnlineUsers(onlineUsers){
        data.onlineUsers = onlineUsers;
    },


}
