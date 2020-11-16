const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Decipher } = require('crypto');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post('/decimal', (req, res) => {
  let decimal = Number(req.body.bilangan);
  let binary, octal, hexadecimal, value, arr;

  // to Binary
  arr = [];
  value = decimal;
  do {
    let bil = value % 2;
    arr.unshift(bil);
    value = (value - bil) / 2;
  } while (value >= 1);
  binary = arr.join('');

  // to Octal
  arr = [];
  value = decimal;
  do {
    let bil = value % 8;
    arr.unshift(bil);
    value = (value - bil) / 8;
  } while (value >= 1);
  octal = arr.join('');

  // to Hexadecimal
  arr = [];
  value = decimal;
  do {
    let bil = value % 16;
    value = (value - bil) / 16;
    switch (bil) {
      case 10:
        bil = 'A';
        break;
      case 11:
        bil = 'B';
        break;
      case 12:
        bil = 'C';
        break;
      case 13:
        bil = 'D';
        break;
      case 14:
        bil = 'E';
        break;
      case 15:
        bil = 'F';
        break;
    }
    arr.unshift(bil);
  } while (value >= 1);
  hexadecimal = arr.join('');

  let response = {
    decimal,
    binary,
    octal,
    hexadecimal,
  };

  res.json(response);
});

app.post('/binary', (req, res) => {
  let binary = req.body.bilangan;
  let decimal, octal, hexadecimal, arr;

  // to Decimal
  arr = [];
  decimal = 0;
  arr = binary.split('');
  do {
    arrLength = arr.length;
    let shifted = arr.shift();
    decimal += shifted * Math.pow(2, arrLength - 1);
  } while (arrLength > 1);

  // to Octal
  value = decimal;
  do {
    let bil = value % 8;
    arr.unshift(bil);
    value = (value - bil) / 8;
  } while (value >= 1);
  octal = arr.join('');

  // to Hexadecimal
  arr = [];
  value = decimal;
  do {
    let bil = value % 16;
    value = (value - bil) / 16;
    switch (bil) {
      case 10:
        bil = 'A';
        break;
      case 11:
        bil = 'B';
        break;
      case 12:
        bil = 'C';
        break;
      case 13:
        bil = 'D';
        break;
      case 14:
        bil = 'E';
        break;
      case 15:
        bil = 'F';
        break;
    }
    arr.unshift(bil);
  } while (value >= 1);
  hexadecimal = arr.join('');

  let response = {
    decimal,
    binary,
    octal,
    hexadecimal,
  };

  res.json(response);
});

app.post('/octal', (req, res) => {
  let octal = req.body.bilangan;
  let decimal, binary, hexadecimal, arr;

  // to Decimal
  arr = [];
  decimal = 0;
  arr = octal.split('');
  do {
    arrLength = arr.length;
    let shifted = arr.shift();
    decimal += shifted * Math.pow(8, arrLength - 1);
  } while (arrLength > 1);

  // to Binary
  arr = [];
  value = decimal;
  do {
    let bil = value % 2;
    arr.unshift(bil);
    value = (value - bil) / 2;
  } while (value >= 1);
  binary = arr.join('');

  // to Hexadecimal
  arr = [];
  value = decimal;
  do {
    let bil = value % 16;
    value = (value - bil) / 16;
    switch (bil) {
      case 10:
        bil = 'A';
        break;
      case 11:
        bil = 'B';
        break;
      case 12:
        bil = 'C';
        break;
      case 13:
        bil = 'D';
        break;
      case 14:
        bil = 'E';
        break;
      case 15:
        bil = 'F';
        break;
    }
    arr.unshift(bil);
  } while (value >= 1);
  hexadecimal = arr.join('');

  let response = {
    decimal,
    binary,
    octal,
    hexadecimal,
  };

  res.json(response);
});

app.listen(8000, () => {
  console.log('Server run on port 8000');
});
