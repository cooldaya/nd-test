import axios from 'axios';
  
// 创建自定义 Axios 实例  
const customAxios = axios.create();  
  
// 添加响应拦截器处理各种错误码  
customAxios.interceptors.response.use(  
    response => response,  
    error => {  
        const status = error.response?.status;  
          
        switch (status) {  
            case 401:  
                // 跳转到登录页面  
                window.location.href = '/login';  
                break;  
            case 403:  
                // 权限不足处理  
                console.error('权限不足');  
                break;  
            case 429:  
                // 限流处理  
                console.warn('请求过于频繁');  
                break;  
            case 500:  
                // 服务器错误处理  
                console.error('服务器内部错误');  
                break;  
        }  
          
        return Promise.reject(error);  
    }  
);  
  
export {
    customAxios
}