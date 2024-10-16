const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const User = require('../models/users');


exports.postUser = async(req, res) => { 
    const user = usersSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User created")
    return res.status(201)     

}           
exports.getUser = (req, res, next) => {

}
exports.searchUserById = (req, res, next) => {

}
exports.updateUserById = (req, res, next) => {

}
exports.deleteUserById = (req, res, next) => {

}