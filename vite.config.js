import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  // honor a PORT assigned by tooling (e.g. preview autoPort); default otherwise
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
