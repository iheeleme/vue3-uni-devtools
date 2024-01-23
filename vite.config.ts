import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [{ src: 'src/components/*.vue', dest: 'components/' }],
    }),
  ],
  //库模式
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'vue3-uni-devtools',
      fileName: 'index',
    },
  },
})
