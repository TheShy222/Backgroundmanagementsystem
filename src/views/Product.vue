<template>
    <h2>商品详情</h2>
    <el-button type="success" @click="addShow = true">添加</el-button>
    <el-table :data="list" style="width: 100%">
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
            <el-button type="danger" @click="bindDele(scope.row)">删除</el-button>
        </el-table-column>
    </el-table>
    <!-- 添加的弹框 -->
    <el-dialog title="添加商品" v-model="addShow" width="40%">
        <el-form :model="user" :rules="rules" label-width="80px">
            <el-form-item label="货号" prop="goodsId">
                <el-input v-model="goodsInfo.goodsId"></el-input>
            </el-form-item>
            <el-form-item label="尺码" prop="size">
                <el-input v-model="goodsInfo.size"></el-input>
            </el-form-item>
            <el-form-item label="品牌分类">
                <el-select v-model="goodsInfo.brand" clearable placeholder="选择品牌种类">
                    <el-option v-for="item in brandCategory" :key="item.id" :label="item.brandName" :value="item.brandName" />
                </el-select>
            </el-form-item>
            <!-- <el-form-item label="图片">
                <el-upload list-type="picture-card" action="#" :auto-upload="true" :show-file-list="false"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item> -->
            <el-form-item label="图片" prop="picture">
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
    <!-- <el-dialog title="编辑商品" v-model="editShow" width="40%">
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
    </el-dialog> -->
</template>

<script>
import { RequestCategoryList, RequestGoodsInfo, RequestAddGoods,RequestDeleGoods } from '@/api/index.js'
export default {
    data() {
        return {
            addShow: false,
            editShow: false,
            goodsInfo: {
                goodsId: '',
                size: '',
                brand: '',
                picture: '',
                price: '',
                detail: '',
                reserve: ''
            },
            list: [],
            brandCategory: [],
            imageUrl: '', //图片预览地址
            imageFile: null //上传图片文件
        }
    },
    mounted() {
        RequestGoodsInfo().then(res => {
            this.list = res.data.list
        }),
            RequestCategoryList().then(res => {
                this.brandCategory = res.data.list
            })
    },
    updated() {
        RequestGoodsInfo().then(res => {
            this.list = res.data.list
        }),
            RequestCategoryList().then(res => {
                this.brandCategory = res.data.list
            })
    },
    methods: {
        bindAdd() {
            RequestAddGoods(this.goodsInfo)
                ElMessage({
                    message: '添加商品成功!',
                    type: 'success',
                })
            this.addShow = false
        },
        bindDele(index) {
            RequestDeleGoods(index.goodsId)
            ElMessage({
                    message: '删除商品成功!',
                    type: 'success',
                })
        },
        // edit(index) {
        //     this.oldName = index.name
        //     this.editShow = true
        // },
        // bindEdit() {
        //     RequestEdit(this.user.AccountName, this.user.Password, this.oldName)
        //     this.user.AccountName = ''
        //     this.user.Password = ''
        //     this.editShow = false
        // },
        beforeAvatarUpload(rawFile) {
            const arr = ['image/jpeg', 'image/png', 'image/jpg']
            // 图片格式验证
            if (!arr.includes(rawFile.type)) {
                ElMessage({
                    message: '上传图片格式不正确！!',
                    type: 'error',
                })
                return false
            }
            // 图片大小验证
            if (rawFile.size / 1024 / 1024 > 2) {
                ElMessage({
                    message: '上传图片大小不能超过2M!',
                    type: 'error',
                })
                return false
            }

            // 图片预览
            //1. 选中的本地图片转成Base64编码 赋值给 imageUrl
            //2. FileReader 读文件
            this.imageUrl = URL.createObjectURL(rawFile)

            // 上传图片
            this.imageFile = rawFile
            return false // 不向下执行
        },
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    width: 150px;
    height: 150px;
    display: block;
}
</style>