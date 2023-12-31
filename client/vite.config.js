import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server: {
    proxy: {
      '/api':{
        target: 'http://localhost:5000',
      },
      '/api/**':{
        target: 'http://localhost:5000',
        changeOrigin: false,
        secure: false,      
        ws: true,
      },
      '/auth/google':{
        target: 'http://localhost:5000',
      },
      '/auth/**':{
        target: 'http://localhost:5000',
        changeOrigin: false,
        secure: false,      
        ws: true,
      }
    },
  },
  plugins: [react()],
})
