const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersSchema = require('../models/users')
const userController = require('../controllers/user')
const isAuth = require('../middleware/is-auth')

router.post('/', userController.postUser);
router.post('/create', userController.postUser);
router.get('/all', userController.allUser);
router.get('/all/:id', userController.getUserById);
router.put('/update/:id', userController.updateUserById);
router.delete('/delete/:id',  userController.deleteUserById);

module.exports = router;
