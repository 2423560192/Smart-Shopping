// 存放所有登录相关的接口请求

// 1. 获取图形验证码
// 获取图形验证码
import request from '@/utils/request'
export const getCode = () => {
  return request.get('/captcha/image')
}
