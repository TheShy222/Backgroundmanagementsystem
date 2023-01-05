<template>
    <div class="info">
        <div class="top">
            <h2>个人信息</h2>
            <h3><router-link to="/alter">修改</router-link></h3>
        </div>
        <div class="bot">
            账号名:<input type="text" v-model="accountName" />
            <br />
            姓&emsp;名:<input type="text" v-model="name" /><br />
            性&emsp;别:<input type="text" v-model="sex" /><br />
            密&emsp;码:<input type="text" v-model="password" />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        accountName(){
            return this.$store.getters['user/User'].accountName
        },
        name(){
            return this.$store.getters['user/User'].name
        },
        sex(){
            return this.$store.getters['user/User'].sex
        },
        password(){
            return this.$store.getters['user/User'].password
        }
    }
}
</script>

<style lang="scss" scoped>
.info {
    width: 800px;
    height: 500px;
    margin: 50px auto;

    .top {
        width: 100%;
        height: 70px;
        background-color: rgb(112, 112, 242);
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
            font-size: 30px;
        }

        h3 {
            width: 50px;
            height: 24px;
            color: #fff;
            border: 1px solid red;
            background-color: rgb(101, 101, 18);
            text-align: center;
            cursor: pointer;
        }
    }

    .bot {
        width: 800px;
        height: 500px;
        background-color: rgb(154, 235, 154);
        input {
            width: 740px;
            height: 40px;
            margin-top: 50px;
        }
    }
}
</style>
