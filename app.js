//jshint esversion:6
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

const products = require('./routes/products');
app.use('/products', products);

const articles = require('./routes/articles');
app.use('/articles', articles);

//app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const data = req.body;
  res.json(data);
});

app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');


module.exports = app;