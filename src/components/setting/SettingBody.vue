<template>
    <div>
        <div class="user-list">
            <div class="user-item" v-for="user in users">
                <div class="user-head">
                    <img slot="head" :src="'/static/img/head/'+user.userhead+'.jpg'" width="100%" height="100%"/>
                </div>
                <div class="user-name">{{user.username}}</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props:["users"]
    }
</script>

<style>
    .user-list{
        padding: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .user-item{
        width:25%;
        padding: .5rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    .user-name{
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
</style>
