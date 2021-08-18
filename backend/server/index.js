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
  const { username, password } = req.body;

  if (users[username] && users[username].password === password) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }

});

app.get('/score', (req, res) => {
  const { username } = req.query;
  const payload = {
    wins: users[username].wins,
    losses: users[username].losses,
    sfDateTime: getTime.sf(),
    nyDateTime: getTime.ny()
  };
  res.send(payload);
});

app.post('/score', (req, res) => {
  const { username, result } = req.body;

  if (result) {
    users[username].wins++;
  } else {
    users[username].losses++;
  }

  const payload = {
    wins: users[username].wins,
    losses: users[username].losses,
    sfDateTime: JSON.stringify(getTime.sf()),
    nyDateTime: JSON.stringify(getTime.ny())
  };

  res.send(payload);
});

app.post('/logout', (req, res) => { });

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));