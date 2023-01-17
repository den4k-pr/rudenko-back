const mongoose = require('mongoose');

const planeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    materials: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    image-2: {
        type: String,
        required: true
    },
    image-3: {
        type: String,
        required: true
    },
    image-4: {
        type: String,
        required: true
    },
    image-5: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Plane", planeSchema);
