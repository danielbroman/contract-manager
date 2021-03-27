const express = require('express');
const router = express.Router();

const {getAllEmployees, getEmployeeById, createEmployee} = require('../controllers/employeecontroller');


router.route('/').get(getAllEmployees).post(createEmployee);
router.route('/:employeeId').get(getEmployeeById);




module.exports = router;