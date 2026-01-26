import { createServer } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const distDir = path.resolve(root, 'dist')
const templatePath = path.join(distDir, 'index.html')

const routes = ['/', '/menu', '/contact', '/specials']

const template = fs.readFileSync(templatePath, 'utf-8')

const vite = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
})

const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

for (const route of routes) {
  const appHtml = await render(route)
  const html = template.replace('<!--ssg-outlet-->', appHtml)
  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
}

await vite.close()
