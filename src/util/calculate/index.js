export function getTrust(str) {
  if (str == "一级") return 1
  if (str == "二级") return 2
  if (str == "三级") return 3
  if (str == "四级") return 4
  if (str == "五级") return 5

  if(str == 1) return "一级"
  if(str == 2) return "二级"
  if(str == 3) return "三级"
  if(str == 4) return "四级"
  if(str == 5) return "五级"
  return null
}