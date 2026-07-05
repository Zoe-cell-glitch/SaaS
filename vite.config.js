import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SaaS/',   # 部署到 GitHub Pages 时使用的路径
  server: {
    host: true,
    port: 5173,
  },
})

