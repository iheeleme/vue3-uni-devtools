//发送
export function consolePush() {
  uni.$emit('consolePush')
}

export function requestPush(value: Object) {
  uni.setStorageSync('requestIheelmeandSeesaw', JSON.stringify(value))
  uni.$emit('requestPush')
}

//监听
export function watchConsole(cb: Function) {
  uni.$on('consolePush', () => {
    const arr = uni.getStorageSync('consoleIheelmeandSeesaw')
    cb(arr)
  })
}

export function watchRequest(cb: Function) {
  uni.$on('requestPush', () => {
    cb()
  })
}
