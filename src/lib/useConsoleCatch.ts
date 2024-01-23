import { clearConsoleData, saveConsoleData } from '@/utils/index'
import { consolePush } from '@/utils/mitt'

export function useConsoleCatch() {
  //初始化前clear
  clearConsoleData()

  const originConsole = globalThis.console

  const handler = {
    get: function (target: any, property: string) {
      return function (...args: any[]) {
        // 将console的打印存到store里
        saveConsoleData(JSON.stringify(args))
        // 然后调用原始的console方法
        Reflect.apply(target[property], originConsole, args)
        // 发送数据增加事件
        consolePush()
        return
      }
    },
  }

  const consoleProxy = new Proxy(originConsole, handler)

  globalThis.console = consoleProxy

  return {
    consoleProxy,
  }
}
