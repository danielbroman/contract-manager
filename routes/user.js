const express = require('express');
const router = express.Router();

const {getAllUsers, getUserById, createUser} = require('../controllers/usercontroller');
const {authorizeRequest} = require('../middleware/auth');


router.route('/').get(authorizeRequest, getAllUsers).post(authorizeRequest, createUser);
router.route('/:userId').get(authorizeRequest, getUserById);




module.exports = router;