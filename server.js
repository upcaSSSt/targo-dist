const { readFileSync, writeFileSync, unlinkSync } = require('node:fs');
const { join } = require('node:path');
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const HOST = 'http://localhost';
const PORT = 3000;

const app = express();

const products = JSON.parse(readFileSync('db.json'));

app.use(cors());

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'img');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  })
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Content-Type', 'application/json');
  next();
});
app.listen(PORT, () => console.log(`App is listening on ${HOST}:${PORT}`));

app.get('/products', (req, res) => {
  res.json(products);
});

app.post(`/`, upload.single('img'), (req, res) => {
  const { name, price, description } = req.body;
  products.push({ imgName: req.file.filename, name, price: +price, description, orders: [{ date: new Date().toISOString().slice(0, 10), n: 1 }] });
  writeFileSync('db.json', JSON.stringify(products));
  res.send('Добавил');
});

app.post(`/order`, (req, res) => {
  if (products[req.body.index].orders.at(-1).date === req.body.now)
    products[req.body.index].orders.at(-1).n += 1;
  else
    products[req.body.index].orders.push({ date: req.body.now, n: 1 });
  writeFileSync('db.json', JSON.stringify(products));
  res.send('Заказал');
});

app.post(`/del`, (req, res) => {
  unlinkSync(join('img', products[req.body.index].imgName));
  products.splice(req.body.index, 1);
  writeFileSync('db.json', JSON.stringify(products));
  res.send('Удалил');
});

