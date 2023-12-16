import request from '@/util/request';

export function goRegister(data) { // 登录
  return request({
    url: "http://www.wutiand.cn/chat/user/user/regist",
    method: "post",
    data
  })
}