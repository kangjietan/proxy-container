const express = require('express');

const axios = require('axios');

const cors = require('cors');

const path = require('path');

const db = require('./database/index.js');

const app = express();

const PORT = 4000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'index.html')));

app.listen(PORT, () => { console.log(`Listening on PORT: ${PORT}`); });

app.get('/initial', (req, res) => {
  const callback = (data) => {
    res.json(data);
};

  db.getInitial(callback);
});

app.get('/bundle.js', (req, res) => {
  axios.get('http://localhost:3000/')
    .then(response => {
      res.send(response.data);
    })
})
