<template>
    <div class="modal">
      <!-- header -->
      <div class="header">
        <p class="title">个人信息</p>
        <p class="close"><router-link to="/user">x</router-link></p>
      </div>
      <!-- 内容区域 -->
      <div class="content">
        <div>
          账号名:<input type="text" v-model="user.accountName" /><br />
          姓&emsp;名:<input type="text" v-model="user.name" /><br />
        </div>
        <div>
          性&emsp;别:<select v-model="user.sex">
            <option value="男">男</option>
            <option value="女">女</option>
          </select><br />
          密&emsp;码:<input type="text" v-model="user.password" /><br />
        </div>
      </div>
      <!-- 底部区域 -->
      <div class="footer">
        <button><router-link to="/user" @click="alter">确定</router-link></button>
        <button><router-link to="/user">取消</router-link></button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        accountName: this.$store.getters['user/User'].accountName,
        name:this.$store.getters['user/User'].name,
        sex: this.$store.getters['user/User'].sex,
        password: this.$store.getters['user/User'].password
      }
    }
  },
  methods: {
    alter() {
      this.$store.dispatch('user/alter',this.user)
    }
  }
}
</script>

<style scoped>
.modal {
  width: 800px;
  height: 480px;
  margin: 100px auto;
  background-color: rgb(246, 244, 244);
  display: flex;
  flex-direction: column;
}

.modal .header {
  display: flex;
  height: 30px;
  background-color: rgb(64, 157, 239);
  justify-content: space-between;
  padding: 15px;
}

.modal .header .close:hover {
  cursor: pointer;
  color: red;
}

.modal .content {
  flex: 1;
  padding: 20px;
}

.modal .content div:first-child {
  float: left;
}

.modal .content div:last-child {
  float: right;
}

.modal .content input {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

.modal .content select {
  width: 152px;
  height: 29px;
  margin-top: 30px;
}

.modal .footer {
  height: 40px;
  line-height: 40px;
  text-align: right;
  background-color: rgb(213, 224, 224);
}

.modal .footer button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: none;
  outline: none;
  background-color: rgb(55, 71, 77);
  color: white;
  margin-right: 10px;
}

.modal .footer button:hover {
  cursor: pointer;
  background-color: rgb(19, 67, 86);
}
</style>
