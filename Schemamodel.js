const mongoose = require("mongoose");

const Schemamodel = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Contact", Schemamodel);
