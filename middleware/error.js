
const ErrorResponse = require('../utils/errorresponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;
    if(err.name === "CastError") {
        const message = 'Resource not found!'
        error = new ErrorResponse(404, message);
    }

    res.status(error.statusCode || 500).json({status: "failed", error: error.message || "Internal server error"});
}

module.exports = errorHandler;