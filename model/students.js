const mongoose = require("mongoose");
require('../connectionDB/db');

const student = new mongoose.Schema({
    student: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model("students", student);