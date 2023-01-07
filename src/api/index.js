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
 * 商品接口
 */
export const RequestProduct = () => {
    return axiosInstance({
        method: 'get',
        url: '/api/shop?pageSize=7'
    })
}

