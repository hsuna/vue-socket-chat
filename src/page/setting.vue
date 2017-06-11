<template>
    <div>
        <setting-head>{{chatinfo.onlineCount}}</setting-head>
        <setting-body :users="chatinfo.onlineUsers"></setting-body>
        <div class="gap-gray"></div>
        <div class="weui-btn-area">
            <button type="button" class="weui-btn_warn weui-btn" @click="logoutClick">退出登录</button>
        </div>
    </div>
</template>


<script>
    import SettingHead from '../components/setting/SettingHead'
    import SettingBody from '../components/setting/SettingBody'

    import userinfo from '../util/userinfo'
    import chatinfo from '../util/chatinfo'

    export default {
        data() {
            return {
                chatinfo:chatinfo.get()
            }
        },
        methods: {
            logoutClick(){
                let that = this;
                this.$dialog({
                    title:'温馨提示',
                    content:'确定退出登录?',
                    assistBtn: '取消',
                    mainBtn: '确定',
                    assistFn () {},
                    mainFn () {
                        that.$socket.emit('logout');
                    }
                })
            }
        },
        components: {
            SettingHead,
            SettingBody
        }
    }
</script>

<style>
    .gap-gray{
        height:1rem;
        background-color:#F2F2F2;
    }
</style>