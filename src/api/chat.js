import request from '@/util/request';

export function sendMsg(data) { // 发送消息
  return request({
    url: "http://www.wutiand.cn/chat/gpt/chat",
    method: "post",
    data
  })
}

export function chatList(data) { // 获取聊天框
  return request({
    url: "http://www.wutiand.cn/chat/chatselect/chatList",
    method: "post",
    data
  })
}

export function addChat(data) { // 新建聊天
  return request({
    url: "http://www.wutiand.cn/chat/chatselect/newChat",
    method: "post",
    data
  })
}

export function records(data) { // 获取当前用户当前聊天的记录
  return request({
    url: "http://www.wutiand.cn/chat/msgrecord/records",
    method: "post",
    data
  })
}

export function deleteChat(data) { // 获取当前用户当前聊天的记录
  return request({
    url: "http://www.wutiand.cn/chat/chatselect/delete",
    method: "post",
    data
  })
}

export function editChat(data) { // 修改聊天名
  return request({
    url: "http://www.wutiand.cn/chat/chatselect/update",
    method: "post",
    data
  })
}

export function addRobot(data) { // 修改聊天名
  return request({
    url: "http://www.wutiand.cn/chat/robot/save",
    method: "post",
    data
  })
}
