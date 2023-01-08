<template>
  <h2>添加新会员</h2>
  <button @click="addShow=true">确定</button>
  <el-table :data="list" style="width: 100%" class="el1">
    <el-table-column prop="name" label="姓名" width="300" />
    <el-table-column prop="password" label="密码" width="300" />
    <el-table-column  label="操作" width="200" #default="scope">
        <el-button  type="primary" @click="edit(scope.row)">编辑</el-button>
        <el-button  type="danger" @click="dele(scope.row)">删除</el-button>
    </el-table-column>
  </el-table>
  <div class="box" v-if="addShow">
        <div class="modal">
            <!-- header -->
            <div class="header">
                <p class="title">新增会员</p>
                <p class="close" @click="cancel">x</p>
            </div>
            <!-- 内容区域 -->
            <div class="content">
                <div>
                    账号名:<input type="text" v-model="user.AccountName" /><br />
                </div>
                <div>
                    密&emsp;码:<input type="password" v-model="user.Password" /><br />
                </div>
            </div>
            <!-- 底部区域 -->
            <div class="footer">
                <button @click="bindConfirm">确定</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
  </div>
  <div class="box" v-if="editShow">
        <div class="modal">
            <!-- header -->
            <div class="header">
                <p class="title">修改会员</p>
                <p class="close" @click="cancel">x</p>
            </div>
            <!-- 内容区域 -->
            <div class="content">
                <div>
                    账号名:<input type="text" v-model="user.AccountName" /><br />
                </div>
                <div>
                    密&emsp;码:<input type="password" v-model="user.Password" /><br />
                </div>
            </div>
            <!-- 底部区域 -->
            <div class="footer">
                <button @click="bindEdit">确定</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
  </div>
</template>

<script>
import { RequestUser } from '@/api/index.js'
import { RequestAdd } from '@/api/index.js'
import { RequestDele } from '@/api/index.js'
import { RequestEdit } from '@/api/index.js'
export default {
  data() {
    return {
      addShow:false,
      editShow:false,
      user:{
        AccountName:'',
        Password:''
      },
      oldName:'',
      list: []
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
  methods:{
    bindConfirm(){
      RequestAdd(this.user.AccountName, this.user.Password)
      this.user.AccountName=''
      this.user.Password=''
      this.addShow=false
    },
    cancel(){
      this.addShow=false
      this.editShow=false
    },
    dele(index){
      RequestDele(index.name)
    },
    edit(index){
      this.oldName=index.name
      console.log(this.oldName)
      this.editShow=true
    },
    bindEdit(){
      RequestEdit(this.user.AccountName, this.user.Password,this.oldName)
      this.user.AccountName=''
      this.user.Password=''
      this.editShow=false
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
.modal .content div:first-child{
    float: left;
}
.modal .content div:last-child{
    float: right;
}
.modal .content input{
    width: 150px;
    height: 25px;
    margin-top: 30px;
}
.modal .content select{
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