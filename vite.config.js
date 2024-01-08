import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
    // For example <img src="/images/logo.png"> will not work without the code below
    template: {
      transformAssetUrls: {
        includeAbsolute: false,
      },
    },
  }), Components({ resolvers: [NaiveUiResolver()] }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    },
  },
})
