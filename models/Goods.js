const mongoose = require('mongoose');

const GoodsSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    goodsDescription: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
    },
    weightUnit: {
        type: String,
        default: "Kg"
    },
    volume: {
        type: Number
    },
    volumeUnit: {
        type: String,
        default: "m3"
    }
});


module.exports = GoodsSchema;