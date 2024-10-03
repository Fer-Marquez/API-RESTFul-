const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

const fs = require("fs");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

const readData = () => {
  try {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
  } catch (error) {
        console.log(error);
  }
};

const writeData = (data) => {
    try {
       fs.writeFileSync("./db.json", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }  
} 

app.get("/", (req, res) => {
    res.send("Sistema de Autenticación y CRUD de Usuarios")
});

app.get("/api", (req, res) => {
    const data = readData();
    res.json(data.userId);
});

app.get("/api/user/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const userId = data.userId.find((user) => user.id === id);
    res.json(user);
  });

  app.post("/api/auth/signup", (req, res) => {
    const data = readData();
    const user = {
      userId: userId,
      email: email
    };
    data.userId.push(newUser);
    writeData(data);
    res.json(newUser);
  });

  app.put("/api/user/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const userIdIndex = data.userId.findIndex((user) => user.id === id);
    data.userId[userIndex] = {
      ...data.userId[userIdIndex],
      ...body,
    };
    writeData(data);
    res.json({ message: "User updated successfully" });
  });
  
  app.delete("/api/user/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const userIdIndex = data.userId.findIndex((user) => user.id === id);
    data.userId.splice(UserIdIndex, 1);
    writeData(data);
    res.json({ message: "User deleted successfully" });
  });



// // GET /feed/users
router.get('/api/users', isAuth, feedController.getUsers);

// // POST /feed/
router.post('/api/users', isAuth, feedController.createUsers);

router.get('/api/users/:userId', isAuth, feedController.getUsers);

router.put('/api/users/:userId', isAuth, feedController.updateUsers);

router.delete('/api/users/:userId', isAuth, feedController.deleteUsers);

module.exports = router;
