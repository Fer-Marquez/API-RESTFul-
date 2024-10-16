const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/users')
const usersSchema = require('../models/users')
const controller = require('../controllers/user.js')
const userRoutes = require('../controllers/user');

// GET/user/ 
router.post('/', async(req, res, next) => {
    console.log("User post")
    return res.status(200).send("Mensaje con exito")
});
// crear usuario
router.post('/create', async(req, res) => { 
    const user = usersSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User created")
    return res.status(201) 

});
//buscar todos los usuarios
router.get('/search', async(req, res) => { 
    usersSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("Users found")
    return res.status(200) 

});
//buscar todos los usuarios
router.get('/search/:id', async(req, res) => { 
    const { id } = req.params;
    usersSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User found")
    return res.status(200) 

});
//actualizar un usuario
router.put('/update/:id', async(req, res) => { 
    const { id } = req.params;
    const { username, password, first_name, last_name } = req.body;
    usersSchema
    .updateOne({ _id: id }, { $set: {username, password, first_name, last_name} })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User Updated")
    return res.status(200) 
});

//borrar un usuario
router.delete('/delete/:id', async(req, res) => { 
    const { id } = req.params;
    usersSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User Deleted")
    return res.status(200) 
});

// router.post('/', userRoutes);
// router.post('/user/create', userRoutes.postUser);
// router.get('/user/search', userRoutes.getUser);
// router.get('/user/search/:id', userRoutes.searchUserById);
// router.update('/user/update/:id', userRoutes.updateUserById);
// router.delete('/user/delete/:id', userRoutes.deleteUserById);

module.exports = router;
