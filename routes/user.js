const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersSchema = require('../models/users')
const userController = require('../controllers/user')
const isAuth = require('../middleware/is-auth')

router.post('/', isAuth, userController.postUser);
router.post('/create', isAuth, userController.postUser);
router.get('/search', isAuth, userController.getUser);
router.get('/search/:id', isAuth, userController.searchUserById);
router.put('/update/:id', isAuth, userController.updateUserById);
router.delete('/delete/:id', isAuth, userController.deleteUserById);

module.exports = router;
