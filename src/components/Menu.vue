<template>
    <div id="left">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
             <span>用户管理</span>
          </template>
            <el-menu-item index="/user">
              <router-link :to="{path:'/user'}">信息管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">限制管理</el-menu-item>
              <el-sub-menu index="1-3">
                <template #title>分组管理</template>
                <el-menu-item index="1-3-1">会员管理</el-menu-item>
                <el-menu-item index="1-3-2">普通管理</el-menu-item>
              </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
             <span>商品管理</span>
          </template>
            <el-menu-item index="2-2">
              <router-link :to="{path:'/product'}">商品信息管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">上下架管理</el-menu-item>
              <el-sub-menu index="2-3">
                <template #title>审核管理</template>
                <el-menu-item index="2-3-1">同意管理</el-menu-item>
                <el-menu-item index="2-3-2">拒绝管理</el-menu-item>
              </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
             <span>客服管理</span>
          </template>
            <el-menu-item index="3-1">
              <router-link :to="{path:'/customer'}">信息管理</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">加分管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
             <span>库存管理</span>
          </template>
            <el-menu-item index="4-1">
              <router-link :to="{path:'reserve'}">入库管理</router-link>
            </el-menu-item>
            <el-menu-item index="4-2">出库管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
             <span>订单管理</span>
          </template>
            <el-menu-item index="5-1">
              <router-link :to="{path:'/order'}">拆单管理</router-link>
            </el-menu-item>
            <el-menu-item index="5-2">合并管理</el-menu-item>
            <el-menu-item index="5-3">订单预警管理</el-menu-item>
            <el-menu-item index="5-4">物流管理</el-menu-item>
            <el-menu-item index="-5">退货单管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
             <span>广告管理</span>
          </template>
            <el-menu-item index="6-1">商家广告管理</el-menu-item>
            <el-menu-item index="6-2">个人广告管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
             <span>评价管理</span>
          </template>
            <el-menu-item index="7-1">
              <router-link :to="{path:'/assess'}">评价管理</router-link>
            </el-menu-item>
            <el-menu-item index="7-2">商品评价管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#left {
    width: 200px;
    height: calc(100vh - 100px);
    background-color: rgb(56, 56, 136);
    .el-menu{
        width: 100%;
    }
    overflow-y: hidden;
}
</style>
