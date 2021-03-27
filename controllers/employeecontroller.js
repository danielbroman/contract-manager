const Employee = require('../models/Employee');
const ErrorResponse = require('../utils/errorresponse');

// @desc     Get all employees
// @route    GET /api/v1/auth/employee
// @access   Private
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({status: "success", data: employees});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Get employee by Id
// @route    GET /api/v1/auth/employee/:employeeId
// @access   Private
exports.getEmployeeById = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        res.status(200).json({status: "success", data: employee});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Create a new employee
// @route    POST /api/v1/auth/employee
// @access   Private
exports.createEmployee = async (req, res) => {
    try {
        const {firstname, lastname, email} = req.body
        const employee = await Employee.create(firstname, lastname, email);
        res.status(201).json({status: "success", data: employee});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Update an employee by Id
// @route    PUT /api/v1/auth/employee/:employeeId
// @access   Private
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({status: "success", data: employee});
    }
    catch(err) {
        next(err);
    }
};

// @desc     Delete an employee by Id
// @route    DELETE /api/v1/auth/employee/:employeeId
// @access   Private
exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteOne({_Id: req.params.employeeId});
        res.status(200).json({status: "success", message: `Successfuly deleted employee with Id: ${req.params.employeeId}`});
    }
    catch(err) {
        return next(err);
    }
};