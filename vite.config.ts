import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://garretn4.github.io/Portfolio/ on GitHub Pages,
// so assets must resolve under the /Portfolio/ base path.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
