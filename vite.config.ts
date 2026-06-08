import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolveBase() {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

  if (process.env.GITHUB_ACTIONS && repoName) {
    return `/${repoName}/`
  }

  return '/'
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react()],
})
