const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.resolve('client/dist')));

app.get('**', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'), err => {
    res.status(500).send(err);
  })
});

app.listen(PORT, () => console.log(`listening on PORT 3000`));