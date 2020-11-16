const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/convert/:type/:temperature', (req, res) => {
  let type = req.params.type;
  let temp = req.params.temperature;
  let celcius, reamur, fahrenheit, kelvin, c, r, f, k;

  if (type == 'celcius') {
    c = temp;
    reamur = (4 / 5) * c;
    kelvin = c + 273;
    fahrenheit = (9 / 5) * c + 32;
  } else if (type == 'reamur') {
    r = temp;
    celcius = (5 / 4) * r;
    kelvin = (5 / 4) * r + 273;
    fahrenheit = (9 / 4) * r + 32;
  } else if (type == 'kelvin') {
    k = temp;
    celcius = k - 273;
    reamur = (4 / 5) * (k - 273);
    fahrenheit = (9 / 5) * (k - 273) + 32;
  } else if (type == 'fahrenheit') {
    f = temp;
    celcius = (5 * (f - 32)) / 9;
    reamur = (4 * (f - 32)) / 9;
    kelvin = (5 * (f - 32)) / 9 + 273;
  }

  let response = {
    celcius: c,
    reamur: r,
    fahrenheit: f,
    kelvin: k,
    result: {
      celcius: celcius,
      reamur: reamur,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };

  res.json(response);
});

app.listen(8000, () => {
  console.log('Server run on port 8000');
});
