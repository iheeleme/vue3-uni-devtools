/// <reference types="vite/client" />

declare interface globalThis {
  request: any
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

//编写代码的时候防止type错误
declare module uni {
  const getStorageSync = (key: string): any => {}
  const setStorageSync = (key: string, value: any) => {}
  const $on = (key: string, cb: Function) => {}
  const $emit = (key: string) => {}
  const removeStorageSync = (key: string) => {}
}
