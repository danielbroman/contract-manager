const mongoose = require('mongoose');

const SignatureSchema = new mongoose.Schema({
    signature: {
        type: String,
        required: true
    },
    signatureDate: {
        type: Date,
        required: true
    },
    signatureName: {
        type: String,
        required: true
    }
});


module.exports = SignatureSchema;