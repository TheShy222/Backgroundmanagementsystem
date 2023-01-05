<template>
    <div class="g-container">
        <Header class="g-header"></Header>

        <div class="g-wrapper">
            <Menu class="g-menu"></Menu>
            <div class="content">
                <!-- 嵌套路由输出位置 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Menu from '../components/Menu.vue'
export default {
    components: {
        Header,
        Menu,
    },
}
</script>

<style lang="scss" scoped>
.g-container {
    display: flex;
    flex-direction: column;
    .g-header{
        height: 100px;
        color: red;
    }
    .g-wrapper{
        flex: 1;
        display: flex;
        .g-menu{
            width: 200px;
        }
        .content{
            flex: 1;
            background-color: skyblue;
        }
    }
}
</style>
