import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv'
dotenv.config() 

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
  define: {
    __STRIPE_KEY__: `"${process.env.VITE_APP_STRIPE_KEY}"`,
    __SECRET_KEY__: `"${process.env.VITE_APP_SECRET_KEY}"`,
  },
})
