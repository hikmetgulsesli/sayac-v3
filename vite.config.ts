import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
<<<<<<< Updated upstream
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
=======
    environment: 'jsdom',
    globals: true,
>>>>>>> Stashed changes
  },
})
