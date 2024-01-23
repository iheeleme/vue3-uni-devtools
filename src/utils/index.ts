// 在本地存储中保存console的数据
export function saveConsoleData(value: string) {
  let arr: any[]
  try {
    arr = uni.getStorageSync('consoleIheelmeandSeesaw') || []
  } catch {
    arr = []
  }
  arr.push(value)
  uni.setStorageSync('consoleIheelmeandSeesaw', arr)
}

//清空本地存储中的console数据
export function clearConsoleData() {
  uni.removeStorageSync('consoleIheelmeandSeesaw')
}
