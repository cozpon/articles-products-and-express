//jshint esversion:6
const exphbs = require('express-handlebars');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const articles = require('./routes/articles');
const products = require('./routes/products');
const PORT = process.env.PORT || 1234;

const router = express.Router();

app.use('/products', products);
app.use('/articles', articles);

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home', { foo: 'bar' });
    });





app.listen(PORT, () => {
  console.log(`server listening on: ${PORT}`);
});