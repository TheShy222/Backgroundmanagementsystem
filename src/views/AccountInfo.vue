<template>
  <h2>会员详情</h2>
  <el-button type="success" @click="addShow = true">添加</el-button>
  <el-table :data="list" style="width: 100%" class="el1">
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="password" label="密码" />
    <el-table-column label="操作" #default="scope">
      <el-button type="primary" @click="edit(scope.row)">编辑</el-button>
      <el-button type="danger" @click="dele(scope.row)">删除</el-button>
    </el-table-column>
  </el-table>
  <!-- 添加的弹框 -->
  <el-dialog title="添加会员" v-model="addShow" width="40%">
    <el-form :model="user" ref="userFormRef" :rules="rules" label-width="80px">
      <el-form-item label="账号名称" prop="AccountName">
        <el-input v-model="user.AccountName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="Password">
        <el-input v-model="user.Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="bindConfirm">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 编辑的弹框 -->
  <el-dialog title="编辑会员" v-model="editShow" width="40%">
    <el-form :model="user" ref="userFormRef" :rules="rules" label-width="80px">
      <el-form-item label="账号名称" prop="AccountName">
        <el-input v-model="user.AccountName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="Password">
        <el-input v-model="user.Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="bindEdit">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { RequestUser, RequestAdd, RequestDele, RequestEdit } from '@/api/index.js'
export default {
  data() {
    return {
      addShow: false,
      editShow: false,
      user: {
        AccountName: '',
        Password: ''
      },
      oldName: '',
      list: [],
      rules: {
        AccountName: [
          {
            required: true,
            message: '请输入账号名称',
            trigger: 'blur',
          },
        ],
        Password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      }
    }
  },
  mounted() {
    RequestUser().then(res => {
      this.list = res.data.list
    })
  },
  updated() {
    RequestUser().then(res => {
      this.list = res.data.list
    })
  },
  methods: {
    bindConfirm() {
      RequestAdd(this.user.AccountName, this.user.Password)
      ElMessage({
          message: '添加用户成功!',
          type: 'success',
        })
      this.user.AccountName = ''
      this.user.Password = ''
      this.addShow = false
    },
    dele(index) {
      RequestDele(index.name)
      ElMessage({
          message: '删除用户成功!',
          type: 'success',
        })
    },
    edit(index) {
      this.oldName = index.name
      this.editShow = true
    },
    bindEdit() {
      RequestEdit(this.user.AccountName, this.user.Password, this.oldName)
      ElMessage({
          message: '修改用户成功!',
          type: 'success',
        })
      this.user.AccountName = ''
      this.user.Password = ''
      this.editShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(19, 19, 19, 0.4);
}

.modal {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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