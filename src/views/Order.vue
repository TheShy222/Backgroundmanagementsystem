<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column fixed prop="id" label="序号" width="100" />
    <el-table-column prop="shop" label="名称" width="200" />
    <el-table-column prop="product" label="产品" width="250" />
    <el-table-column prop="price" label="价格" width="100" />
    <el-table-column prop="categoryname" label="类型" width="200" />
    <el-table-column fixed="right" label="操作" width="200">
      <template #default>
        <el-button link type="primary">编辑</el-button>
        <el-button link type="primary">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
}
</script>

<style lang="scss" scoped>

</style>