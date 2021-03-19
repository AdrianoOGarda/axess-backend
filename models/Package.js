const { Schema, model } = require('mongoose')

const packageSchema = new Schema({
    name: {
        en: String,
        es: String,
    },
    description: {
        en: String,
        es: String,
    },
    image: String,
}, {
    timestamps: true,
})

module.exports = model('Package', packageSchema);