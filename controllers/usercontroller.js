const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorresponse');
const jwt = require('jsonwebtoken');

// @desc     Get all users
// @route    GET /api/v1/user
// @access   Private
exports.getAllUsers = async (req, res, next) => {
    try {
            const users = await User.find();
            res.status(200).json({status: "success", data: users});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Get user by Id
// @route    GET /api/v1/user/:userId
// @access   Private
exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json({status: "success", data: user});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Create a new user
// @route    POST /api/v1/user
// @access   Private
exports.createUser = async (req, res, next) => {
    try {
        const {firstname, lastname, email, password} = req.body;
        const user = await User.create({firstname, lastname, email, password});
        res.status(201).json({status: "success", data: user});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Update a user by Id
// @route    PUT /api/v1/user/:userId
// @access   Private
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({status: "success", data: user});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Delete a user by Id
// @route    DELETE /api/v1/user/:userId
// @access   Private
exports.deleteUser = async (req, res, next) => {
    try {
        await User.deleteOne({_Id: req.params.userId});
        res.status(200).json({status: "success", message: `Successfuly deleted user with Id: ${req.params.userId}`});
    }
    catch(err) {
        return next(err);
    }
};