import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/domain/**'],
      thresholds: {
        lines: 90,
        branches: 90,
      },
    },
  },
})