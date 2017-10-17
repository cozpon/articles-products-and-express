//jshint esversion:6
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));
app.use(methodOverride('_method'));
app.engine('.hbs', exphbs ({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');

const products = require('./routes/products');

app.use('/products', products);

app.get('/', (req, res) => {
  res.render('home', { hell : "HELL"});
});

app.listen(1234, () =>{
  console.log(`Server's UP`);
});
module.exports = app;
