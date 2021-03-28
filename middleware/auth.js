const express = require('express');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorresponse');

const authorizeRequest = async (req, res, next) => {
    if(req.header('Authorization')) {
        const token = req.header('Authorization').split(' ')[1];
    
        jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
            if(err) {
                res.status(400).json({status: "unauthorized", description: "Token not valid"});
            }
        })
        next();
    }
    else {
        next(new ErrorResponse(400, "Token not provided"));
    }
}

module.exports = {
    authorizeRequest
};