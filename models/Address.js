const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    street: {
        type: String
    },
    zipCode: {
        type: Number
    },
    city: {
        type: String
    }
});


module.exports = AddressSchema;