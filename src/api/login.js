import request from '@/util/request';

export function goLogin(data) { // 登录
  return request({
    url: "http://www.wutiand.cn/chat/user/user/login",
    method: "post",
    data
  })
}


