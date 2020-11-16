const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/test', (req, res) => {
  let response = {
    message: 'Contoh Pembuatan End Point',
    method: req.method,
    code: res.statusCode,
  };

  res.json(response);
});

app.get('/profile/:name/:age', (req, res) => {
  let name = req.params.name;
  let age = req.params.age;

  let response = {
    nama: name,
    umur: age,
  };

  res.json(response);
});

app.post('/lingkaran', (req, res) => {
  let r = Number(req.body.rusuk);
  let phi, luas, keliling;

  if (r % 7 == 0) phi = 22 / 7;
  else phi = 3.14;

  luas = phi * r * r;
  keliling = phi * 2 * r;

  let response = {
    rusuk: r,
    luas: luas,
    keliling: keliling,
  };

  res.json(response);
});

app.listen(8000, () => {
  console.log('Server run on port 8000');
});
