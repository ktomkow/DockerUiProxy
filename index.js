const { default: Axios } = require('axios')
const axios = require('axios');
const express = require('express')
const app = express()
const port = 4999

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/catalog', (req,res) => {
  axios.get('http://192.168.0.133:9997/v2/_catalog/').then(response => {
    res.send(response.data);
  });
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})