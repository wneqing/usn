
import request from "../utils/request"

//  登录方法

export const login = (data = {}) => {
  return request({
    url : '/admin/login',
    method : "POST",
    data
  })
}

// 获取用户信息接口

export const userInfo = () => {
  return request({
    url : '/admin/getUserInfo',
    method : "GET"
  })
}

// 退出登录接口

export const logout = () => {
  return request({
    url : "/admin/logout",
    method : "POST"
  })
}
