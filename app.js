import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("My First API RESTFul with Node js!")
})

app.listen(3000, () =>{
    console.log('Server listening on port 3000!!')
});