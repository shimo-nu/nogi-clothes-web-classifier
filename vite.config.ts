import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tsconfigPaths from 'vite-tsconfig-paths';
// import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tsconfigPaths(),
    // typescript({
    //   tsconfig: './tsconfig.json',
    //   declaration: true,
    //   declarationDir: 'dist/types',
    //   include: ['src/**/*.ts', 'src/**/*.vue']
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
