const Furniture = require("../models/Furniture")

exports.createFurniture = async(req, res) => {
    const { name, description, image1, image2, image3, size, category, project } = req.body;
    const furniture = await Furniture.create({
        ...req.body
    })
    res.status(201).json({ furniture })
}

exports.updateFurniture = async(req, res) => {
    const { name, description, image1, image2, image3, size, category, project } = req.body;
    const { furnitureId } = req.params;
    const furniture = await Furniture.findByIdAndUpdate(furnitureId, {
        ...req.body
    }, { new: true });
    res.status(200).json({ furniture })
}

exports.getFurnitures = async(req, res) => {
    const furniture = await Furniture.find();
    res.status(200).json({ furniture })
}

exports.getFurniture = async(req, res) => {
    const { furnitureId } = req.params;
    const furniture = await Furniture.findById(furnitureId);
    res.status(200).json({ furniture })
}

exports.deleteFurniture = async(req, res) => {
    const { furnitureId } = req.params
    await Furniture.findByIdAndRemove(furnitureId)
    res.status(200).json({ message: "deleted" })
}