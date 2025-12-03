import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to the repo name for GitHub Pages deployment
// Replace '/REPO_NAME/' with your repo name or use import.meta.env.BASE_URL
export default defineConfig({
  base: 'akash-portfolio.git',
  plugins: [react()],
  build: {
    target: 'esnext'
  }
})
