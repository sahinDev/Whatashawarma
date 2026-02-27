import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import sharp from "sharp";
import { connectDB } from "../config/db.js";
import foodModel from "../models/foodModel.js";

const uploadDir = process.env.UPLOAD_DIR || "uploads";
const exts = new Set([".png", ".jpg", ".jpeg"]);

const getUrlPathname = (value) => {
  try {
    return new URL(value).pathname;
  } catch {
    return value;
  }
};

await connectDB();

const foods = await foodModel.find({});
let converted = 0;
let updated = 0;
let skippedMissing = 0;

for (const food of foods) {
  if (!food.image) continue;

  const imageName = path.basename(getUrlPathname(food.image));
  const parsed = path.parse(imageName);
  const ext = parsed.ext.toLowerCase();

  if (!exts.has(ext)) continue;

  const sourcePath = path.resolve(uploadDir, imageName);
  const webpName = `${parsed.name}.webp`;
  const webpPath = path.resolve(uploadDir, webpName);

  if (!fs.existsSync(sourcePath)) {
    skippedMissing += 1;
    continue;
  }

  if (!fs.existsSync(webpPath)) {
    await sharp(sourcePath).webp({ quality: 80 }).toFile(webpPath);
    converted += 1;
  }

  food.image = food.image.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  await food.save();
  updated += 1;
}

console.log(`Converted files: ${converted}`);
console.log(`Updated DB records: ${updated}`);
console.log(`Skipped missing files: ${skippedMissing}`);

await mongoose.disconnect();
