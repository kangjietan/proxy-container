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
  console.log('Bottom Audio Player')
  axios.get('http://13.56.50.57:3000/bundle.js')
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});
