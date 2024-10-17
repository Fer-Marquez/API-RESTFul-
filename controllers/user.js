const userController = {};
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
//const User = require('../models/users');


userController.postUser = async(req, res) => { 
    const user = usersSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User created")
    return res.status(201)     

}           
userController.getUser = async(req, res) => { 
    usersSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("Users found")
    return res.status(200) 

}

userController.searchUserById = async(req, res) => { 
    const { id } = req.params;
    usersSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User found")
    return res.status(200) 

}
userController.updateUserById = async(req, res) => { 
    const { id } = req.params;
    const { username, password, first_name, last_name } = req.body;
    usersSchema
    .updateOne({ _id: id }, { $set: {username, password, first_name, last_name} })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User Updated")
    return res.status(200) 
}
userController.deleteUserById = async(req, res) => { 
    const { id } = req.params;
    usersSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User Deleted")
    return res.status(200) 
}
module.exports= userController