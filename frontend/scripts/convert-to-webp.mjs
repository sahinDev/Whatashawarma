import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const targets = [path.join(root, "src", "assets"), path.join(root, "public")];
const exts = new Set([".png", ".jpg", ".jpeg"]);

const convertFile = async (sourcePath) => {
  const targetPath = sourcePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  await sharp(sourcePath).webp({ quality: 80 }).toFile(targetPath);
};

const walk = async (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!exts.has(ext)) continue;

    await convertFile(fullPath);
  }
};

for (const target of targets) {
  if (fs.existsSync(target)) {
    await walk(target);
  }
}

console.log("WebP conversion complete.");
