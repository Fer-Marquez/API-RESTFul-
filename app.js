import express from "express";
import fs from "fs";

const app = express();

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

app.listen(3000, () =>{
    console.log('Server listening on port 3000!')
});