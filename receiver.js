const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.headers));
  console.log(Object.keys(req.headers).some(header => !req.headers[header]))
  res.send(JSON.stringify(req.headers));
});

app.post('/', (req, res) => {
  console.log(req.headers);
  // res.send(Object.keys(req.headers).some(header => !req.headers[header]));
  res.send(JSON.stringify(req.headers));
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))