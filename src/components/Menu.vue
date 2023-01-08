<template>
  <div id="left">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user">
          <el-icon><UserFilled /></el-icon><router-link :to="{ path: '/user' }">信息管理</router-link>
        </el-menu-item>
        <el-menu-item index="1-2"><el-icon><WarnTriangleFilled /></el-icon>限制管理</el-menu-item>
        <el-sub-menu index="1-3">
          <template #title><el-icon><Menu /></el-icon>分组管理</template>
          <el-menu-item index="1-3-1">
            <router-link :to="{ path: '/accountInfo' }"><el-icon><Avatar /></el-icon>会员管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-3-2"><el-icon><Notification /></el-icon>普通管理</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Food /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-2">
          <router-link :to="{ path: '/product' }"><el-icon><MilkTea /></el-icon>商品信息管理</router-link>
        </el-menu-item>
        <el-menu-item index="2-2"><el-icon><FolderAdd /></el-icon>上下架管理</el-menu-item>
        <el-sub-menu index="2-3">
          <template #title><el-icon><DocumentChecked /></el-icon>审核管理</template>
          <el-menu-item index="2-3-1"><el-icon><Select /></el-icon>同意管理</el-menu-item>
          <el-menu-item index="2-3-2"><el-icon><CloseBold /></el-icon>拒绝管理</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Service /></el-icon>
          <span>客服管理</span>
        </template>
        <el-menu-item index="3-1">
          <router-link :to="{ path: '/customer' }"><el-icon><Female /></el-icon>信息管理</router-link>
        </el-menu-item>
        <el-menu-item index="3-2"><el-icon><Star /></el-icon>加分管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><PieChart /></el-icon>
          <span>库存管理</span>
        </template>
        <el-menu-item index="4-1">
          <router-link :to="{ path: 'reserve' }"><el-icon><CircleCheck /></el-icon>入库管理</router-link>
        </el-menu-item>
        <el-menu-item index="4-2"><el-icon><CircleClose /></el-icon>出库管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="5-1">
          <router-link :to="{ path: '/order' }"><el-icon><RemoveFilled /></el-icon>拆单管理</router-link>
        </el-menu-item>
        <el-menu-item index="5-2"><el-icon><CirclePlusFilled /></el-icon>合并管理</el-menu-item>
        <el-menu-item index="5-3"><el-icon><WarnTriangleFilled /></el-icon>订单预警管理</el-menu-item>
        <el-menu-item index="5-4"><el-icon><Compass /></el-icon>物流管理</el-menu-item>
        <el-menu-item index="-5"><el-icon><Bell /></el-icon>退货单管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><Aim /></el-icon>
          <span>广告管理</span>
        </template>
        <el-menu-item index="6-1"><el-icon><Connection /></el-icon>商家广告管理</el-menu-item>
        <el-menu-item index="6-2"><el-icon><Discount /></el-icon>个人广告管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><ChatDotRound /></el-icon>
          <span>评价管理</span>
        </template>
        <el-menu-item index="7-1">
          <router-link :to="{ path: '/assess' }"><el-icon><More /></el-icon>评价管理</router-link>
        </el-menu-item>
        <el-menu-item index="7-2"><el-icon><Comment /></el-icon>商品评价管理</el-menu-item>
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
  background-color:#545c64;
  .el-menu {
    width: 100%;
    height: 100%;
  }

  overflow-y: hidden;
}
</style>
