import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const textExts = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".html"]);

const replaceExtensions = (content) =>
  content.replace(/\.(png|jpg|jpeg)(?=["')\s])/gi, ".webp");

const processFile = (filePath) => {
  const oldContent = fs.readFileSync(filePath, "utf8");
  const newContent = replaceExtensions(oldContent);

  if (newContent !== oldContent) {
    fs.writeFileSync(filePath, newContent, "utf8");
  }
};

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist") continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!textExts.has(path.extname(entry.name).toLowerCase())) continue;
    processFile(fullPath);
  }
};

walk(path.join(root, "src"));

const indexHtmlPath = path.join(root, "index.html");
if (fs.existsSync(indexHtmlPath)) {
  processFile(indexHtmlPath);
}

console.log("Image references updated to .webp");
