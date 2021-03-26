const { Schema, model } = require('mongoose')

const furnitureSchema = new Schema({
    name: {
        en: String,
        es: String,
    },
    description: {
        en: String,
        es: String,
    },
    image1: String,
    image2: String,
    image3: String,
    size: {
        en: String,
        es: String,
    },
    price: Number,
    category: {
        es: {
            type: String,
            enum: [
                "CAMAS",
                "BUROS",
                "CREDENZAS",
                "BANCOS (DE COCINA)",
                "SILLAS PARA COMEDOR",
                "COMEDORES",
                "SOFAS",
                "MESAS DE CENTRO",
                "SILLAS LATERALES",
                "MUEBLES DE TV",
                "SILLAS DE EXTERIOR",
                "COMEDORES DE EXTERIOR",
                "SILLAS LOUNGE",
                "CAMASTROS",
                "MESAS LATERALES EXTERIOR",
                "SALAS DE EXTERIOR"
            ]
        },
        en: {
            type: String,
            enum: [
                "BEDS",
                "NIGHTSTANDS",
                "CREDENZAS",
                "HIGH CHAIRS (KITCHEN)",
                "DINING CHAIRS",
                "DINING TABLES",
                "SOFAS",
                "COFFEE TABLES",
                "SIDE CHAIRS",
                "TV STANDS",
                "OUTDOOR CHAIRS",
                "OUTDOOR DINING TABLES",
                "LOUNGE CHAIRS",
                "SUNBEDS",
                "OUTDOOR SIDE TABLES",
                "OUTDOOR SOFAS"
            ]
        }
    },
    project: String,
}, {
    timestamps: true,
});

module.exports = model('Furniture', furnitureSchema);