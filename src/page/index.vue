<template></template>

<script>
    import userinfo from '../util/userinfo'

    export default {
        created (){
            if(userinfo.isLogin()){
                this.$router.push('/chat');
            }else{
                this.$router.push('/login');
            }
        }
    }
</script>