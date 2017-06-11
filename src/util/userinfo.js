/**用户信息  */
const STORAGE_KEY = 'hsunachat';

//生产环境使用localStorage
const storage = (process.env.NODE_ENV === 'production')?localStorage:sessionStorage;

export default {
    get(){
        let str = storage.getItem(STORAGE_KEY);
        return str?JSON.parse(str):null;
    },
    set(obj){
        if(this.isLogin()){
          return false;
        }else{
          storage.setItem(STORAGE_KEY, JSON.stringify(obj));
          return true;
        }
    },
    del(){
        storage.removeItem(STORAGE_KEY);
    },

    isSelf(userid){
        return userid === this.getUserId()?true:false;
    },
    getUserId(){
        let obj = this.get();
        return obj?obj.userid:'';
    },
    getUserName(){
        let obj = this.get();
        return obj?obj.username:'';
    },
    isLogin(){
        return this.get()?true:false;
    },
    getNewUserId(){
        return (new Date().getTime() + '' + Math.floor(Math.random() * 100000 + 100)) - 0;
    },
    getNewUserHead(){
        let tmpStr = '000' + Math.floor(Math.random() * 15 + 1);
        return tmpStr.substr(-3, 3);
    }
}
