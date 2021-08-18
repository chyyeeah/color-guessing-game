const express = require('express');
const cors = require('cors');
const users = require('../db/users');
const getTime = require('../utils/getTime');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const username = req.body.username;

  if (!users[username]) {
    users[username] = { wins: 0, losses: 0 };
  }

  const payload = {
    username,
    wins: users[username].wins,
    lossess: users[username].losses,
    sfDateTime: getTime.sf(),
    nyDateTime: getTime.ny()
  };

  res.send(payload);
});

app.post('/score', (req, res) => {
  res.send('');
});

app.post('/logout', (req, res) => {});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));