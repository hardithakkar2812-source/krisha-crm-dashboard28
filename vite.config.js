import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const repoName = 'krisha-crm-dashboard'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
