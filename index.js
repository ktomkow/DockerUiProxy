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

  axios.get(address).then((response) => {
    res.send(response.data);
  });
});

app.listen(port, () => {
  console.log(`Docker local registry proxy starts on http://localhost:${port}`);
});
