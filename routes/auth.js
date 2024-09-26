const express = require('express');
const { body } = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express.Router();

router.put(
   '/signup',
  [
    body('username')
      .isUsername()
      .withMessage('Please enter a valid username.')
      .custom((value, { req }) => {
        return User.findOne({ username: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('Username is already exists!');
          }
        });
      })
      .normalizeUsername(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
    body('name')
      .trim()
      .not()
      .isEmpty()
  ],
  authController.signup
);

// router.post('/login', authController.login);

 module.exports = router;
