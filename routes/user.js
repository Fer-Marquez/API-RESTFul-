const express = require('express');
const router = express.Router();
// const userRoutes = require('../controllers/user');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersSchema = require('../models/users')
const userController = require('../controllers/user')

router.post('/', userController.postUser);
router.post('/create', userController.postUser);
router.get('/search', userController.getUser);
router.get('/search/:id', userController.searchUserById);
router.put('/update/:id', userController.updateUserById);
router.delete('/delete/:id', userController.deleteUserById);

module.exports = router;
