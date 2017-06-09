var storage = sessionStorage;

export default {
    get(){
        return {
            userid:storage.getItem('userid') || '',
            username:storage.getItem('username') || ''
        }
    },
    set(obj){
        storage.setItem('userid', obj.userid);
        storage.setItem('username', obj.username);
        return true;
    },
    getUserId(){
        return storage.getItem('userid') || '';
    },
    getUserName(){
        return storage.getItem('username') || '';
    },
    isLogin(){
        return storage.getItem('userid')?true:false;
    }
}