<template>
    <div id="top">
        <img src="../assets/imgs/log.jpg" class="pic" />
        <h1>欢迎{{ name }}!</h1>
        <ul class="listTop">
            <li><router-link to="/product">切换账号</router-link></li>
            <li><router-link to="/product">消息</router-link></li>
            <li @click="exit">退出</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        exit() {
            localStorage.removeItem('loginAccount')
            this.$router.replace({ path: '/login' })
        }
    },
    computed: {
        name() {
            return this.$store.getters['loginAccount/loginAccount'].name
        }
    }
}
</script>

<style lang="scss" scoped>
#top {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #42B884;
    .pic{
        width: 199px;
        height: 100px;
    }
    h1{
        color: black;
    }
    .listTop {
        width: 300px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        li {
            color: white;
            &:hover {
                cursor: pointer;
                background-color: rgb(113, 113, 161);
            }
        }
    }
}
</style>