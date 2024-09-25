import express from "express";
import fs from "fs";

const app = express();

const readData = () => {
    const data = fs.readFileSync("./db.json");
    console.log(data);
};

readData();

app.get("/", (req, res) => {
    res.send("My First API RESTFul with Node js!")
})

app.listen(3000, () =>{
    console.log('Server listening on port 3000!')
});