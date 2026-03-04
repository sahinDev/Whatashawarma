import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const getImageFileName = (imageValue) => {
    if (!imageValue) {
        return "";
    }

    if (imageValue.startsWith("http")) {
        try {
            return path.basename(new URL(imageValue).pathname);
        } catch (error) {
            return "";
        }
    }

    return path.basename(imageValue);
};

const toWebpAndBuildUrl = async (file, req) => {
    const uploadDir = process.env.UPLOAD_DIR || "uploads";
    const baseUrl = process.env.PUBLIC_BASE_URL || `${req.protocol}://${req.get("host")}`;

    const parsed = path.parse(file.filename);
    const webpFilename = `${parsed.name}.webp`;
    const webpPath = path.join(uploadDir, webpFilename);

    await sharp(file.path).webp({ quality: 80 }).toFile(webpPath);
    fs.unlink(file.path, () => { });

    return `${baseUrl}/images/${webpFilename}`;
};

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
        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }

        const imageUrl = await toWebpAndBuildUrl(req.file, req);

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

// update food
const updateFood = async (req, res) => {
    try {
        const { id, name, description, category } = req.body;
        const parsedPrice = Number(req.body.price);

        if (!id || !name || !description || !category || Number.isNaN(parsedPrice)) {
            if (req.file?.path) {
                fs.unlink(req.file.path, () => { });
            }
            return res.json({ success: false, message: "Missing or invalid fields" });
        }

        const food = await foodModel.findById(id);
        if (!food) {
            return res.json({ success: false, message: "Food not found" });
        }

        food.name = name;
        food.description = description;
        food.category = category;
        food.price = parsedPrice;

        if (req.file) {
            const newImageUrl = await toWebpAndBuildUrl(req.file, req);
            const oldImageName = getImageFileName(food.image);

            if (oldImageName) {
                const uploadDir = process.env.UPLOAD_DIR || "uploads";
                fs.unlink(path.join(uploadDir, oldImageName), () => { });
            }

            food.image = newImageUrl;
        }

        await food.save();
        res.json({ success: true, message: "Food Updated", data: food });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// delete food
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        const uploadDir = process.env.UPLOAD_DIR || 'uploads'
        const imageName = getImageFileName(food?.image);
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

export { listFood, addFood, removeFood, updateFood }
