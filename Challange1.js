const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post('/kubus', (req, res) => {
  let s = Number(req.body.sisi);
  let luasPermukaan, volume;

  luasPermukaan = 6 * s * s;
  volume = s * s * s;

  let response = {
    panjangSisi: s,
    luasPermukaan: luasPermukaan,
    volume: volume,
  };

  res.json(response);
});

app.post('/balok', (req, res) => {
  let p = Number(req.body.panjang);
  let l = Number(req.body.lebar);
  let t = Number(req.body.tinggi);
  let luasPermukaan, volume;

  luasPermukaan = 2 * (p * l + p * t + l * t);
  volume = p * l * t;

  let response = {
    panjang: p,
    lebar: l,
    tinggi: t,
    luasPermukaan: luasPermukaan,
    volume: volume,
  };

  res.json(response);
});

app.post('/tabung', (req, res) => {
  let r = Number(req.body.rusuk);
  let t = Number(req.body.tinggi);
  let phi, luasPermukaan, volume;

  if (r % 7 == 0) phi = 22 / 7;
  else phi = 3.14;

  volume = phi * r * r * t;
  luasPermukaan = 2 * phi * r * (r + t);

  let response = {
    rusuk: r,
    tinggi: t,
    luasPermukaan: luasPermukaan,
    volume: volume,
  };

  res.json(response);
});

app.post('/kerucut', (req, res) => {
  let r = Number(req.body.rusuk);
  let t = Number(req.body.tinggi);
  let s = Number(req.body.garisPelukis);
  let phi, luasPermukaan, volume;

  if (r % 7 == 0) phi = 22 / 7;
  else phi = 3.14;

  volume = (phi * r * r * t) / 3;
  luasPermukaan = phi * r * r + phi * r * s;

  let response = {
    rusuk: r,
    tinggi: t,
    garisPelukis: s,
    luasPermukaan: luasPermukaan,
    volume: volume,
  };

  res.json(response);
});

app.post('/bola', (req, res) => {
  let r = Number(req.body.rusuk);
  let phi, luasPermukaan, volume;

  if (r % 7 == 0) phi = 22 / 7;
  else phi = 3.14;

  volume = (phi * r * r * r * 4) / 3;
  luasPermukaan = 4 * phi * r * r;

  let response = {
    rusuk: r,
    luasPermukaan: luasPermukaan,
    volume: volume,
  };

  res.json(response);
});

app.listen(8000, () => {
  console.log('Server run on port 8000');
});
