const { default: Axios } = require('axios');
const axios = require('axios');
const express = require('express');
const app = express();
const port = 4999;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/passOn/:addressInBase64', (req, res) => {
  const addressInBase64 = req.params.addressInBase64;
  let buff = new Buffer.from(addressInBase64, 'base64');
  const address = buff.toString('ascii');

  axios.get('http://192.168.0.133:9997/v2/_catalog/') // change this address
    .then((response) => {
      // res.send(response.data);
      res.send(address);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
