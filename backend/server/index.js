const express = require('express');
const cors = require('cors');
const parseCookies = require('../utils/parseCookies');
const users = require('../utils/users');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  res.sendStatus(200);
});
app.post('/logout', (req, res) => {});
app.get('/game', (req, res) => {});
app.post('/score', (req, res) => {
  res.send('');
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));