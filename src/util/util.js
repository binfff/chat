import * as CryptoJS from "crypto-js";
/**
 *加密处理
 */
export const encryption = (params) => {
  let { data, type, param, key } = params;
  const result = JSON.parse(JSON.stringify(data));
  if (type === "Base64") {
    param.forEach((ele) => {
      result[ele] = btoa(result[ele]);
    });
  } else {
    param.forEach((ele) => {
      var data = result[ele];
      key = CryptoJS.enc.Latin1.parse(key);
      var iv = key;
      // 加密
      var encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.NoPadding,
      });
      result[ele] = encrypted.toString();
    });
  }
  return result;
};
/**
 * 存储localStorage
 */
export const setStore = (params = {}) => {
  let {
    name,
    content,
    type
  } = params
  name = keyName + name
  const obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    datetime: new Date().getTime()
  }

  if (type) {
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  } else {
    window.localStorage.setItem(name, JSON.stringify(obj))
  }
}
