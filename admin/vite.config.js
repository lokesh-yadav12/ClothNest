import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      allow: [
        path.resolve(__dirname, '..') // Allows access to the parent directory (backend)
      ]
    }
  }
})
