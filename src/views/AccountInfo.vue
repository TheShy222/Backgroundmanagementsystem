<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="500" />
    <el-table-column prop="password" label="密码" width="500" />
    <el-table-column fixed="right" label="操作" width="200">
      <template #default>
        <el-button link type="primary">编辑</el-button>
        <el-button link type="primary">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { RequestUser } from '@/api/index.js'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    RequestUser().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>

</style>