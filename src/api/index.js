import axiosInstance from '@/utils/request.js'

/**
 * 登录接口
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
export const RequestLogin = (username, password) => {
    return axiosInstance({
        method: 'post',
        url: '/login',
        //post请求参数使用data选项, get参数 params选项
        data: {
            username,
            password
        }
    })
}
/**
 * 用户接口
 */
export const RequestUser = () => {
    return axiosInstance({
        method: 'get',
        url: '/loginInfo'
    })
}
/**
 * 添加用户接口
 */
export const RequestAdd = (username, password) => {
    return axiosInstance({
        method: 'post',
        url: '/add',
        data: {
            username,
            password
        }
    })
}
/**
 * 删除用户接口
 */
export const RequestDele = (username) => {
    return axiosInstance({
        method: 'post',
        url: '/dele',
        data: {
            username
        }
    })
}
/**
 * 修改用户接口
 */
export const RequestEdit = (username, password, oldName) => {
    return axiosInstance({
        method: 'post',
        url: '/edit',
        data: {
            username,
            password,
            oldName
        }
    })
}
/**
 * 商品信息接口
 */
export const RequestGoodsInfo = (pageSize,pageNo) => {
    return axiosInstance({
        method: 'get',
        url: '/goodsInfo',
        params:{
            pageSize,
            pageNo
        }
    })
}
/**
 * 商品分类接口
 */
export const RequestCategoryList = () => {
    return axiosInstance({
        method: 'get',
        url: '/brandCategory'
    })
}
/**
 * 商品添加接口
 */
export const RequestAddGoods = (formdata) => {
    return axiosInstance({
        method: 'post',
        url: '/addGoods',
        data: {
            formdata
        }
    })
}
/**
 * 商品删除接口
 */
export const RequestDeleGoods = (goodsId) => {
    return axiosInstance({
        method: 'post',
        url: '/deleGoods',
        data: {
            goodsId
        }
    })
}
/**
 * 商品编辑接口
 */
export const RequestEditGoods = (formdata,goodsId) => {
    return axiosInstance({
        method: 'post',
        url: '/editGoods',
        data: {
            formdata,
            goodsId
        }
    })
}


