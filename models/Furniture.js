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
    image4: String,
    measurements: String,
    kind: {
        en: {
            type: String,
            enum: [
                "Chairs",
                "Sofas",
                "Recliners",
                "Coffee Tables",
                "Benches",
                "Dining Tables",
                "Arm Chairs",
                "Bar stools",
                "Beds",
                "Nightstands",
                "Dressers",
                "Chests",
                "Mirrors",
                "Desks",
                "Cabinets",
                "Bookcases"
            ]
        },
        es: {
            type: String,
            enum: [
                "Sillas",
                "Sofas",
                "Reclinadores",
                "Mesas de Café",
                "Bancas",
                "Mesas de Comedor",
                "Sillones",
                "Taburetes",
                "Camas",
                "Mesitas de Noche",
                "Aparadores",
                "Cofres",
                "Espejos",
                "Escritorios",
                "Armarios",
                "Libreros"
            ]
        }
    },
    category: {
        en: {
            type: String,
            enum: [
                "Bedroom",
                "Bathroom",
                "Living Room",
                "Dining Room",
                "Kitchen",
                "Laundry"
            ]
        },
        es: {
            type: String,
            enum: [
                "Dormitorio",
                "Baño",
                "Sala",
                "Comedor",
                "Cocina",
                "Cuarto de Lavado"

            ]
        }
    }
}, {
    timestamps: true,
});

module.exports = model('Furniture', furnitureSchema);