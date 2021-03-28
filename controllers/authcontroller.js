const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { restart } = require('nodemon');
const User = require('../models/User');


// @desc     Login a user
// @route    GET /api/v1/auth/login
// @access   Public
exports.loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await user.comparePassword(password);

    if(!isMatch) res.status(500).json({status: "failed", error: "Authentication error, password or email doesn't match"});

    // sign jwt token and send back to user
    const token = await user.signToken();

    res.status(200).json({
        status: "success",
        token
    });
};