<template>
    <table>
        <tr>
            <th colspan='5'>商品页面</th>
        </tr>
        <tr>
            <th>序号</th>
            <th>类型</th>
            <th>图片</th>
            <th>价格</th>
            <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.categoryname }}</td>
            <td><img :src="item.picture" style="width:50px;" /></td>
            <td>{{ item.price }}</td>
            <td><span>删除</span>|<span>编辑</span></td>
        </tr>
    </table>
</template>

<script>
import { RequestProduct } from '@/api/index.js'
export default {
    data() {
        return {
            list: []
        }
    },
    // methods: {
    //     async getProduct() {
    //         const res = await RequestProduct()
    //         this.list = res.data.resultInfo.list
    //     },
    // }
    mounted () {
        RequestProduct().then(res=>{
            this.list=res.data.resultInfo.list
        })
    }
}
</script>

<style lang="scss" scoped>
table {
    width: 690px;
    margin: 100px auto;
    background-color: hotpink;
    text-align: center;
}

table th,
td {
    width: 100px;
    height: 40px;
    border: 1px solid red;
    background-color: skyblue;
    text-align: center;
    color: blue;
}
</style>
