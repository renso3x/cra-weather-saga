const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

app.get('*', (req, res) => {
  const query = req.query.query ? `?query=${req.query.query}` : '';
  return axios
    .get(`https://www.metaweather.com${req.path}${query}`)
    .then(result => {
      res.json(result.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err.message);
    });
});

app.listen(port, () => console.log(`Express proxy is running on port ${port}`));
