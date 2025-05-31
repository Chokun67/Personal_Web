import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // ✅ เพิ่มตรงนี้

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ ให้ @ หมายถึง /src
    },
  },
  base: process.env.VITE_BASE_PATH ?? "/Personal_Web"
})
