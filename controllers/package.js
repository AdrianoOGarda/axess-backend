const Package = require("../models/Package")

exports.createPackage = async(req, res) => {
    const { name, description, image } = req.body;
    const package = await Package.create({
        ...req.body
    })
    res.status(201).json({ package })
}

exports.updatePackage = async(req, res) => {
    const { name, description, image } = req.body;
    const { packageId } = req.params;
    const package = await Package.findByIdAndUpdate(packageId, {
        ...req.body
    }, { new: true });
    res.status(200).json({ package })
}

exports.getPackages = async(req, res) => {
    const package = await Package.find();
    res.status(200).json({ package })
}

exports.getPackage = async(req, res) => {
    const { packageId } = req.params;
    const package = await Package.findById(packageId);
    res.status(200).json({ package })
}

exports.deletePackage = async(req, res) => {
    const { packageId } = req.params
    await Package.findByIdAndRemove(packageId)
    res.status(200).json({ message: "deleted" })
}