<template>
  <el-row :gutter="20" style="margin-bottom: 10px">
        <el-col :span="8">
            <el-button type="success" @click="addShow = true">添加</el-button>
            <el-button type="warning" @click="bindRefresh">刷新</el-button>
            <el-button type="primary" @click="bindBatchDelete">批量删除</el-button>
        </el-col>
        <el-col :span="8">
            <el-input v-model="searchId" placeholder="货号搜索" clearable></el-input>
        </el-col>
        <el-col :span="8">
            <el-button type="warning" @click="bindSearch">搜索产品</el-button>
        </el-col>
    </el-row>
  <el-table :data="list" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="goodsId" label="货号" />
    <el-table-column prop="size" label="尺码" />
    <el-table-column prop="brand" label="品牌" />
    <el-table-column label="图片" #default="scope">
      <el-image :src="scope.row.picture" style="width: 100px; height: 100px">
      </el-image>
    </el-table-column>
    <el-table-column prop="price" label="价格" />
    <el-table-column prop="detail" label="详情" />
    <el-table-column prop="reserve" label="库存" />
    <el-table-column label="操作" #default="scope">
      <el-button type="primary" @click="edit(scope.row)">编辑</el-button>
      <el-popconfirm title="确认要删除此记录吗?" @confirm="bindDele(scope.row)">
        <template #reference>
          <el-button type="danger">删除</el-button>
        </template>
      </el-popconfirm>
    </el-table-column>
  </el-table>
   <!-- 分页 -->
   <el-pagination background layout="total,sizes,prev, pager, next, jumper" :total="total" :page-sizes="[5, 10, 15]"
        @size-change="bindSizeChange" @current-change="bindCurrentChange"></el-pagination>
    <!-- 添加的弹框 -->
    <el-dialog title="添加商品" v-model="addShow" width="40%">
        <el-form :model="goodsInfo" :rules="rules" label-width="80px">
            <el-form-item label="货号" prop="goodsId">
                <el-input v-model="goodsInfo.goodsId"></el-input>
            </el-form-item>
            <el-form-item label="尺码" prop="size">
                <el-input v-model="goodsInfo.size"></el-input>
            </el-form-item>
            <el-form-item label="品牌分类">
                <el-select v-model="goodsInfo.brand" clearable placeholder="选择品牌种类">
                    <el-option v-for="item in brandCategory" :key="item.id" :label="item.brandName"
                        :value="item.brandName" />
                </el-select>
            </el-form-item>
            <el-form-item label="图片">
                <!-- <el-upload list-type="picture-card" action="#" :auto-upload="true" show-file-list="false" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else>
                        <Plus />
                    </el-icon>
                </el-upload> -->
                <el-input v-model="goodsInfo.picture"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
                <el-input v-model="goodsInfo.price"></el-input>
            </el-form-item>
            <el-form-item label="详情" prop="detail">
                <el-input v-model="goodsInfo.detail"></el-input>
            </el-form-item>
            <el-form-item label="库存" prop="reserve">
                <el-input v-model="goodsInfo.reserve"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="bindAdd">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
    <!-- 编辑的弹框 -->
    <el-dialog title="编辑商品" v-model="editShow" width="40%">
        <el-form :model="goodsInfo" :rules="rules" label-width="80px">
            <el-form-item label="货号" prop="goodsId">
                <el-input v-model="goodsInfo.goodsId"></el-input>
            </el-form-item>
            <el-form-item label="尺码" prop="size">
                <el-input v-model="goodsInfo.size"></el-input>
            </el-form-item>
            <el-form-item label="品牌分类">
                <el-select v-model="goodsInfo.brand" clearable placeholder="选择品牌种类">
                    <el-option v-for="item in brandCategory" :key="item.id" :label="item.brandName"
                        :value="item.brandName" />
                </el-select>
            </el-form-item>
            <el-form-item label="图片">
                <!-- <el-upload list-type="picture-card" action="#" :auto-upload="true" show-file-list="false" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else>
                        <Plus />
                    </el-icon>
                </el-upload> -->
                <el-input v-model="goodsInfo.picture"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
                <el-input v-model="goodsInfo.price"></el-input>
            </el-form-item>
            <el-form-item label="详情" prop="detail">
                <el-input v-model="goodsInfo.detail"></el-input>
            </el-form-item>
            <el-form-item label="库存" prop="reserve">
                <el-input v-model="goodsInfo.reserve"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="bindEdit">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { goodsId: '112241101-6', size: '42', brand: '安踏', picture: 'https://img11.360buyimg.com/n1/jfs/t1/45002/16/22366/112295/63bd502aF4d640017/c95f582b449a4e98.jpg', price: 555 },
        { goodsId: '878219110041', size: '36', brand: '特步', picture: 'http://t15.baidu.com/it/u=1580487696,1286897242&fm=224&app=112&f.JPEG', price: 209 },
        { goodsId: '879219110530', size: '41', brand: '特步', picture: 'https://img11.360buyimg.com/n1/jfs/t1/54392/9/22461/124343/63bd048bF4ca8e0b2/38f93cdbc5877465.jpg', price: 289 },
        { goodsId: '881218319851', size: '38', brand: '特步', picture: 'https://img0.baidu.com/it/u=3358077408,781660041&fm=253&fmt=auto&app=138&f.JPEG', price: 129 },
        { goodsId: '922215535', size: '40', brand: '特步', picture: 'http://t15.baidu.com/it/u=2218149002,1308618527&fm=224&app=112&f.JPEG', price: 255 },
        { goodsId: 'AFDR910-1', size: 'L', brand: '李宁', picture: 'https://img12.360buyimg.com/n1/jfs/t1/198591/17/10350/130147/61512e74Eb6dfc4b4/b6351e12e6506717.jpg', price: 579 },
        { goodsId: 'AGCR472-1', size: 'S', brand: '李宁', picture: 'http://t15.baidu.com/it/u=3184301325,4243045671&fm=224&app=112&f.JPEG', price: 309 },
        { goodsId: 'AT0057-200', size: '43', brand: '耐克', picture: 'http://t15.baidu.com/it/u=3598409823,1106765728&fm=224&app=112&f.JPEG', price: 709 },
        { goodsId: 'AV3922-157', size: '42', brand: '耐克', picture: 'https://img30.360buyimg.com/n1/jfs/t1/20270/4/6207/58674/5c4aec75E0a53858e/c40976cc1b711458.jpg', price: 959 },
        { goodsId: 'CK6366-010', size: 'M', brand: '耐克', picture: 'https://img0.baidu.com/it/u=4246459729,320075537&fm=253&' }]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>