//jshint esversion:6
const exphbs = require('express-handlebars');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 1234;
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ "extended" : true }));

const products = require('./routes/products');
app.use('/products', products);

const articles = require('./routes/articles');
app.use('/articles', articles);

//app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');


// app.use(bodyParser.json());




app.listen(PORT, () => {
  console.log(`server listening on: ${PORT}`);
});