<template>
    <div class="left">
        <ul class="listLeft">
            <li :class="{action:currentIndex===index}" @click="onTab(index)" v-for="item,index in menuList" :key="index">
                <router-link :to="{path:item.path}">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentIndex:0,
            menuList:[
                {path:'/user',title:'用户管理'},
                {path:'/product',title:'商品管理'},
                {path:'/customer',title:'客服管理'},
                {path:'/reserve',title:'库存管理'},
                {path:'/order',title:'订单管理'},
                {path:'/assess',title:'评价管理'},
            ]
        }
    },
    methods: {
        onTab(index){
            this.currentIndex=index
        }
    }
}
</script>

<style lang="scss" scoped>
.left {
    width: 200px;
    height: calc(100vh - 100px);
    background-color: rgb(56, 56, 136);
}

.listLeft {
    width: 100px;
    height: 500px;
    margin-left: 40px;
    margin-top: 100px;
}

.listLeft li {
    margin-top: 50px;
    color: white;
    cursor: pointer;
    text-align: center;
}
.action{
    background-color: red;
}
</style>
