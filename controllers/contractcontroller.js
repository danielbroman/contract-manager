const Contract = require('../models/Contract');
const ErrorResponse = require('../utils/errorresponse');


// @desc     Get all contracts
// @route    GET /api/v1/contract
// @access   Private
exports.getAllContracts = async (req, res, next) => {
    try {
            const contracts = await Contract.find();
            res.status(200).json({status: "success", data: contracts});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Get contract by Id
// @route    GET /api/v1/contract/:contractId
// @access   Private
exports.getContractById = async (req, res, next) => {
    try {
        const contract = await Contract.findById(req.params.contractId);
        res.status(200).json({status: "success", data: contract});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Create a new contract
// @route    POST /api/v1/contract
// @access   Private
exports.createContract = async (req, res, next) => {
    try {
        const data = {
            sender, 
            senderAddress, 
            receiver, 
            receiverAddress, 
            driverId, 
            goods, 
            receiverSignature, 
            driverSignature, 
            consignorSignature
        } = req.body;
        
        const contract = await Contract.create(data);

        res.status(201).json({status: "success", data: contract});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Update a contract by Id
// @route    PUT /api/v1/contract/:contractId
// @access   Private
exports.updateContract = async (req, res, next) => {
    try {
        const contract = await Contract.findByIdAndUpdate(req.params.contractId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({status: "success", data: contract});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Delete a contract by Id
// @route    DELETE /api/v1/contract/:contractId
// @access   Private
exports.deleteContract = async (req, res, next) => {
    try {
        const contract = await Contract.deleteOne({_id: req.params.contractId});
        if(contract.deletedCount === 1) {
            res.status(200).json({status: "success", message: `Successfuly deleted contract with Id: ${req.params.contractId}`});
        }
        else {
            next(new ErrorResponse(400, `Could not find contract with id: ${req.params.contractId}`));
        }
    }
    catch(err) {
        return next(err);
    }
};