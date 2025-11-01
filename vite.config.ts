import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
/** @ts-ignore */
import Components from 'unplugin-vue-components/vite'
/** @ts-ignore */
import AntDesignVueResolver from 'unplugin-vue-components/resolvers/ant-design-vue'
/** @ts-ignore */
import chromeExtension from 'vite-plugin-chrome-extension'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    process.env.BUILD_CRX && chromeExtension(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
