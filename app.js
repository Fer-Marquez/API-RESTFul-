const express = require('express');
const config = require ('./config')
const fs = require("fs");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./modules/users/rutas')
const authRoutes = require('./routes/auth');

const app = express();
app.set('port', config.app.port)

  app.use(bodyParser.json());
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use('./auth', authRoutes)

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//Rutas
app.use('/api/users', users)
  
mongoose.connect('mongodb+srv://fernandamarquez:elreyjesus1@cluster0.lrnkyrk.mongodb.net/messages')
.then(result => {
  app.listen(3000, () =>{
    console.log('Server listening on port 3000!')
    });
  })
  .catch(err => console.log(err));
  
module.exports = app;