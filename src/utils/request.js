import axios from 'axios'
/**
 * 创建axios实例
 *   封装baseURL
 */
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8090', // 服务根地址
    timeout: 2000, // 超时时间
})
/**
 * 请求拦截器
 */
// axiosInstance.interceptors.request.use(
//     config => {
//         // const token = localStorage.getItem('TOKEN')

//         // if(token){
//         //     config.headers['Authorization'] = token
//         // }
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
//         return response.data
//     },
//     error => {
//         const { response } = error
//         if (response) {
//             const status = response.status
//             switch (status) {
//                 case 404:
//                     ElMessage({ type: 'error', message: '资源不存在 404' })
//                     break
//                 case 401:
//                     ElMessage({ type: 'error', message: 'Unauthorized 身份验证凭证缺失!' })
//                     break
//                 case 403:
//                     ElMessage({ type: 'error', message: '403 Forbidden - 拒绝访问!' })
//                     break
//                 case 500:
//                     ElMessage({ type: 'error', message: '服务器出错' })
//                     break
//                 default:
//                     ElMessage({ type: 'error', message: '出现异想不到的错误！' })
//                     break
//             }
//         } else {
//             // 说明服务器连结果都没有返回，可能的原因有两种：
//             /**
//              * 1. 服务器崩掉了
//              * 2. 前端客户端断网状态
//              */
//             if (!window.navigator.onLine) {
//                 // 判断为断网，可以跳转到断网页面
//                 ElMessage({ type: 'error', message: '网络不可用,请检查您的网络连接!' })
//                 return
//             } else {
//                 ElMessage({ type: 'error', message: '连接服务端出错!' + error?.message })
//                 return Promise.reject(error)
//             }
//         }
//         return Promise.reject(error)
//     }
// )

export default axiosInstance
