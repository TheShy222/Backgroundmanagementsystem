import axiosInstance from '@/utils/request.js'

/**
 * 登录接口
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
// export const RequestLogin = (username,password) => {
//     return axiosInstance({
//         method: 'post',
//         url: '/api/login',
//         //post请求参数使用data选项, get参数 params选项
//         data: {
//             username,
//             password,
//         },
//     })
// }
export const RequestLogin = (username,password) => {
    return axiosInstance({
        method: 'post',
        url: '/login',
        //post请求参数使用data选项, get参数 params选项
        data:{
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
export const RequestAdd = (username,password) => {
    return axiosInstance({
        method: 'post',
        url: '/add',
        data:{
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
        data:{
            username
        }
    })
}
/**
 * 商品接口
 */
export const RequestProduct = () => {
    return axiosInstance({
        method: 'get',
        url: '/api/shop?pageSize=7'
    })
}

