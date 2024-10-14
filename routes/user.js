const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/users')
const usersSchema = require('../models/users')

// GET/user/create 
router.post('/', async(req, res, next) => {
    console.log("User post")
    return res.status(200).send("Mensaje con exito")
});
router.post('/create', async(req, res) => { 
    const user = usersSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json ({message: error }));

    console.log("User created")
    // return res.status(201).json({ post:{ id: new Date().toISOString(), content: content, email: "",
    //     password: "",
    //     first_name: "",
    //     last_name: "",
    //     crate_at: "",
    //     update_at: ""}
    // })
});
router.put('/update', async(req, res, next) => {
    console.log("Updated user")
    return res.status(200).send("Actualizado")
});
router.delete('/delete', async(req, res, next) => {
    console.log("Correctly delete")
    return res.status(200).send("Eliminado")
});

module.exports = router;
