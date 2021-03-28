const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    senderAddress: {
        street: {
            type: String
        },
        zipCode: {
            type: Number
        },
        city: {
            type: String
        }
    },
    receiver: {
        type: String,
        required: true
    },
    receiverAddress: {
        street: {
            type: String
        },
        zipCode: {
            type: Number
        },
        city: {
            type: String
        }
    },
    driverId: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Contract', ContractSchema);