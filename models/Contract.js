const mongoose = require('mongoose');
const Address = require('./Address');
const Signature = require('./Signature');
const Goods = require('./Goods');

const ContractSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    senderAddress: Address,
    receiver: {
        type: String,
        required: true
    },
    receiverAddress: Address,
    driverId: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String
    },
    receiverSignature: Signature,
    driverSignature: Signature,
    consignorSignature: Signature,
    goods: [Goods]
});


module.exports = mongoose.model('Contract', ContractSchema);