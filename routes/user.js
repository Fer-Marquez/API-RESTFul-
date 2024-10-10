const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/users')

// GET/user/create 
router.post('/', async(req, res, next) => {
    console.log("User post")
    return res.status(200).send("Mensaje con exito")
});
router.post('/create', async(req, res) => {
    const content = req.body.content;
    console.log("Usuario creado")
    return res.status(201).json({ post:{ id: new Date().toISOString(), content: content, email: "",
        password: "",
        first_name: "",
        last_name: "",
        crate_at: "",
        update_at: ""}
    }).send("Nuevo Usuario agregado")
});
module.exports = router;
