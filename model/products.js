const mongoose = require("mongoose");
require('../connectionDB/db');

const product = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    }
});

module.exports = new mongoose.model("products", product);