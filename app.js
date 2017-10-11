//jshint esversion:6
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));
app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');

const products = require('./routes/products');

const articles = require('./routes/articles');

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home', { hell : "A Weird Website That Has Articles & Buttons!"});
});

app.use('/articles', articles);

app.use('/products', products);

module.exports = app;