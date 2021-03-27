const Employee = require('../models/Employee');

// @desc     Get all employees
// @route    GET /api/v1/auth/employee
// @access   Private
exports.getAllEmployees = function(req, res) {
    Employee.find({}, function(err, result) {
        res.send(result);
    });
};

// @desc     Get employee by Id
// @route    GET /api/v1/auth/employee/:userid
// @access   Private
exports.getEmployeeById = function(req, res) {
    res.send(`Gets employee with ID: ${req.params.employeeId}`);
};

// @desc     Create a new employee
// @route    POST /api/v1/auth/employee
// @access   Private
exports.createEmployee = function(req, res) {
    Employee.create({firstname: "Daniel", lastname: "Broman", email: "danielbroman92@gmail.com"});
    res.send('Created new employee');
};