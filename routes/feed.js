const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

// const app = express();

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
    const bookIndex = data.books.findIndex((book) => book.id === id);
    data.books[bookIndex] = {
      ...data.books[bookIndex],
      ...body,
    };
    writeData(data);
    res.json({ message: "User updated successfully" });
  });
  
  app.delete("/api/user/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    data.books.splice(bookIndex, 1);
    writeData(data);
    res.json({ message: "User deleted successfully" });
  });



// // GET /feed/posts
// router.get('/posts', isAuth, feedController.getPosts);

// // POST /feed/post
// router.post(
//   '/post',
//   isAuth,
//   [
//     body('title')
//       .trim()
//       .isLength({ min: 5 }),
//     body('content')
//       .trim()
//       .isLength({ min: 5 })
//   ],
//   feedController.createPost
// );

// router.get('/post/:postId', isAuth, feedController.getPost);

// router.put(
//   '/post/:postId',
//   isAuth,
//   [
//     body('title')
//       .trim()
//       .isLength({ min: 5 }),
//     body('content')
//       .trim()
//       .isLength({ min: 5 })
//   ],
//   feedController.updatePost
// );

// router.delete('/post/:postId', isAuth, feedController.deletePost);

module.exports = router;
