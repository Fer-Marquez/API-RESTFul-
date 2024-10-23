const express = require('express');
const { check } = require('express-validator');

const User = require('../models/users');
const authController = require('../controllers/auth');

const router = express.Router();

router.put('/signup', [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('Email is already exists!');
          }
        });
      })

    .normalizeEmail(),
    check('password')
      .trim()
      .isLength({ min: 5 }),
    check('username')

      .trim()
      .not()
      .isEmpty()
  ],
  authController.signup
);

// router.post('/login', authController.login);

 module.exports = router;
