import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";
import sharp from "sharp";

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addFood = async (req, res) => {

    try {
        const uploadDir = process.env.UPLOAD_DIR || "uploads"
        const baseUrl = process.env.PUBLIC_BASE_URL || `${req.protocol}://${req.get("host")}`

        const parsed = path.parse(req.file.filename)
        const webpFilename = `${parsed.name}.webp`
        const webpPath = path.join(uploadDir, webpFilename)

        await sharp(req.file.path).webp({ quality: 80 }).toFile(webpPath)
        fs.unlink(req.file.path, () => { })

        const imageUrl = `${baseUrl}/images/${webpFilename}`

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: imageUrl,
        })

        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        const uploadDir = process.env.UPLOAD_DIR || 'uploads'
        let imageName = food?.image || ""
        if (imageName.startsWith("http")) {
            imageName = path.basename(new URL(imageName).pathname)
        }
        if (imageName) {
            fs.unlink(path.join(uploadDir, imageName), () => { })
        }

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listFood, addFood, removeFood }
