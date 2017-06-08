<template>
    <div class="chat-foot weui-cell">
        <div class="weui-cell__bd">
            <vwTextarea></vwTextarea>
        </div>
        <div class="weui-cell__fd">
            <vwButton primary>发送</vwButton>
        </div>
    </div>
</template>


<script>
    import vwTextarea from 'vuwe/src/components/forms/textarea'
    import vwButton from 'vuwe/src/components/buttons/button'

    export default {
        data() {
            return {

            }
        },
        created () {
        },
        methods: {
        },
        components: {
            vwButton,
            vwTextarea
        }
    }
</script>
<style>
    .chat-foot{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-shadow: 0 -.1rem .1rem #ccc;
    }

    .chat-foot:before{
        border-top: 0;
    }

    .chat-foot .weui-cell__bd .weui-cell {
        margin: 0 .5rem;
        padding: 0;
        line-height: 1;
        border-bottom: 1px solid #000;
    }

    .chat-foot .weui-cell__fd a {
        line-height: 2
    }
</style>