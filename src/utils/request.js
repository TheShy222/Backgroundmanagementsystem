import axios from 'axios'

/**
 * 创建axios实例
 *   封装baseURL
 */
const axiosInstance = axios.create({
    baseURL: 'http://10.7.163.142:8089', // 服务根地址
    timeout: 2000, // 超时时间
})

/**
 * 请求拦截器
 */
// axiosInstance.interceptors.request.use(
//     config => {
//         // 请求拦截处理
//         console.log('请求拦截处理 >>> ', config)
//         // config.headers['Author'] = 'my header'
//         return config
//     },
//     error => {
//         // 请求出错处理
//         return Promise.reject(error)
//     }
// )

/**
 * 响应拦截器
 */
// axiosInstance.interceptors.response.use(
//     response => {
//         // 响应拦截处理
//         console.log('响应拦截器处理 >>> ', response)  
//         return response.data
//     },
//     error => {
//         const { response } = error
//         if (response) {
//             const status = response.status
//             switch (status) {
//                 case 404:
//                     console.log('资源不存在 404')
//                     break
//                 case 401:
//                     console.log('Unauthorized 身份验证凭证缺失!')
//                     break
//                 case 403:
//                     console.log('403 Forbidden - 拒绝访问!')
//                     break
//                 case 500:
//                     console.log('服务器出错!')
//                     break
//                 default:
//                     console.log('出现异想不到的错误！')
//                     break
//             }
//         }else {
//             // 说明服务器连结果都没有返回，可能的原因有两种：
//             /**
//              * 1. 服务器崩掉了
//              * 2. 前端客户端断网状态
//              */
//             if (!window.navigator.onLine) {
//                 // 判断为断网，可以跳转到断网页面
//                 console.log('网络不可用,请检查您的网络连接!')
//                 return
//             } else {
//                 console.log('连接服务端出错!' + error?.message)
//                 return Promise.reject(error)
//             }
//         }
//         return Promise.reject(error)
//     }
// )

export default axiosInstance
