const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('Usuarios')
})
router.get("/api", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const userId = data.userId.find((user) => user.id === id);
    res.json(user);
  });
  router.post("/api/auth/signup", (req, res) => {
    const data = readData();
    const user = {
      userId: userId,
      email: email
    };
    data.userId.push(newUser);
    writeData(data);
    res.json(newUser);
  });

module.exports = router;