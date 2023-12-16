import request from "@/util/request";

export function getPub() { // 修改聊天名
  return request({
    url: "http://www.wutiand.cn/chat/robot/getPublic",
    method: "post",
    data:{}
  })
}
// export function getAiList() {
//   // 或许热门文章
//   return request({
//     url: "https://api.aichat.la/index/categoryInfo",
//     method: "post"
//   });
// }
// export function getRoots() {
//   // 或许热门文章
//   return request({
//     url: "https://api.aichat.la/index/robots",
//     method: "post",
//     data: {
//       lastId: 0,
//       limit: 16,
//       page: 0,
//       type: 2,
//     },
//   });
// }

