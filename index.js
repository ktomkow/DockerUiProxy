const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4999;

app.use(cors({
  origin: "*"
}))

app.get('/healtcheck', (req, res) => {
  res.send({ message: 'Works' });
});

app.get('/passOn/:addressInBase64', (req, res) => {
  const addressInBase64 = req.params.addressInBase64;
  let buff = new Buffer.from(addressInBase64, 'base64');
  const address = buff.toString('ascii');

  axios
    .get(address)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      const errorStatusCode = error.response.status;
      res.status(errorStatusCode).send({
        message: `Something gone wrong`,
        statusCode: errorStatusCode
      });
    });
});

app.listen(port, () => {
  console.log(`Docker local registry proxy starts on http://localhost:${port}`);
});
