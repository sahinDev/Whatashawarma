import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ssgPlugin } from 'vite-plugin-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      pages: [
        'src/ssg/HomePage.jsx',
        'src/ssg/MenuPage.jsx',
        'src/ssg/ContactPage.jsx',
        'src/ssg/SpecialsPage.jsx',
      ],
    }),
  ],
  server: { port: 5173 },
})
