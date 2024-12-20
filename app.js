const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');

const app = express();

//middleware para solicitudes formato JSON
  app.use(bodyParser.json());
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
// routes
  app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
  })

//middleware
app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.get('/all/:active&true=1', (req, res) => {
  res.send({ Active: ` ${req.params.userId}!` })
})



app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


//mongo conection   
mongoose.connect('mongodb+srv://fernandamarquez:elreyjesus1@cluster0.lrnkyrk.mongodb.net/messages')
.then(result => {
  app.listen(3000, () =>{
    console.log('Server listening on port 3000!')
    });
  })
  .catch(err => console.log(err));
  
module.exports = app;