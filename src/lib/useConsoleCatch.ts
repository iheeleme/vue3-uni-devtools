export function useConsoleCatch() {
    const originConsole = window.console

    //保存的捕获的console数组
    const consoleArray: string[] = []

    const handler = {
        get: function (target: any, property: string) {
            return function (...args: any[]) {
                
                originConsole.log(`监听到了console`, property, args);
                consoleArray.push(`console.log${args}`);
                // 然后调用原始的console方法
                return Reflect.apply(target[property], originConsole, args);
            };
        },
    }

    const consoleProxy = new Proxy(originConsole, handler)

    window.console = consoleProxy

    return {
        consoleProxy,
        consoleArray
    }
}
