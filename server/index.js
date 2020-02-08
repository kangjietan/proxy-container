const express = require('express');

const axios = require('axios');

const cors = require('cors');

const path = require('path');

// const db = require('./database/index.js');

const app = express();

const PORT = 1000;

app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => { console.log(`Listening on PORT: ${PORT}`); });

app.get('/bottom', (req, res) => {
  axios.get('http://13.56.50.57:3000/bundle.js')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/comments', (req, res) => {
  axios.get('http://18.144.144.76:3001/bundle.js')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/api/comments', (req, res) => {
  axios.get('http://18.144.144.76:3001/api/comments')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});