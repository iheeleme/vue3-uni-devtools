/// <reference types="vite/client" />

declare interface globalThis {
    request: any
}

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
