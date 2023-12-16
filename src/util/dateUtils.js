/**
 * Created by NPF on 2018/10/22.
 */

/**
 * 获取当前时间
 * 并自动格式化为：yyyy-MM-dd
 */
export function getNewDate () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate = year + '-' + month + '-' + strDate
  return currentdate
}

/**
 * 获取当前月份第一天时间
 * 并自动格式化为：yyyy-MM-dd
 */
export function getNewMonthDay () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }

  var currentdate = year + '-' + month + '-01'
  return currentdate
}

/**
 * 获取当前月份第一天时间
 * 并自动格式化为：yyyy-MM-dd
 */
export function getNewMonth () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }

  var currentdate = year + '-' + month
  return currentdate
}

/**
 * 获取当前年的第一个月
 * 并自动格式化为：yyyy-MM-dd
 */
export function getNewYear () {
  var date = new Date()
  var year = date.getFullYear()
  var currentdate = year + '-01'
  return currentdate
}

/**
 * 获取当前时间
 * 并自动格式化为：yyyy-MM-dd HH:mm:ss
 */
export function getNewTime (data) {
  var date = new Date(data)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  var currentdate = year + '-' + month + '-' + strDate + ' ' + hours + ':' + minutes + ':' + seconds
  return currentdate
}
