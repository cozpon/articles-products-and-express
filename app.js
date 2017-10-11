//jshint esversion:6
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));
app.use(methodOverride('_method'));
app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');

const products = require('./routes/products');

app.use('/products', products);

const articles = require('./routes/articles');

app.use('/articles', articles);

app.get('/', (req, res) => {
  res.render('home', { hell : "A Weird Website That Has Articles & Products!"});
});


module.exports = app;