const { Schema, model } = require('mongoose')

const furnitureSchema = new Schema({
    name: String,
    descrpitionEs: String,
    descriptionEn: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    measurements: String,
    category: String,
}, {
    timestamps: true,
});