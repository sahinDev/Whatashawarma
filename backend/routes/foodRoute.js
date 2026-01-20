import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import fs from 'fs';
const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)
const uploadDir = process.env.UPLOAD_DIR || 'uploads';

fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

foodRouter.get("/list",listFood);
foodRouter.post("/add",upload.single('image'),addFood);
foodRouter.post("/remove",removeFood);

export default foodRouter;
