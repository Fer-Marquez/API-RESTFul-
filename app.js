const express = require('express');
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
    res.send("My First API RESTFul with Node js!")
});

app.get("/books", (req, res) => {
    const data = readData();
    res.json(data.books);
});

app.get("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const book = data.books.find((book) => book.id === id);
    res.json(book);
  });

  app.post("/books", (req, res) => {
    const data = readData();
    const body = req.body;
    const newBook = {
      id: data.books.length + 1,
      ...body,
    };
    data.books.push(newBook);
    writeData(data);
    res.json(newBook);
  });

  app.put("/books/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    data.books[bookIndex] = {
      ...data.books[bookIndex],
      ...body,
    };
    writeData(data);
    res.json({ message: "Book updated successfully" });
  });
  
  app.delete("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    data.books.splice(bookIndex, 1);
    writeData(data);
    res.json({ message: "Book deleted successfully" });
  });

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

  
mongoose.connect('mongodb+srv://fernandamarquez:elreyjesus1@cluster0.lrnkyrk.mongodb.net/messages')
.then(result => {
  app.listen(3000, () =>{
    console.log('Server listening on port 3000!')
    });
  })
  .catch(err => console.log(err));
  
