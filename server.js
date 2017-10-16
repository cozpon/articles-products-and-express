//jshint esversion:6
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const router = express.Router();
const pgp = require('pg-promise')();
const db = pgp('postgres://localhost:1234/ap');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));
app.use(methodOverride('_method'));
app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      extname: '.hbs'
    }));
app.set('view engine', '.hbs');




class products {

  create (product) {
    let name = product.name;
    let price = product.price;
    let inventory = product.inventory;

    if (!name || !price || !inventory) {
      throw new Error ('invalid');
    }
    let query = 'INSERT INTO products VALUES($1, $2, $3)';
    let params = [name, price, inventory];
    return db.any(query, params);
  }
}





app.get('/', (req, res) => {
  res.send('smoke test');
  console.log("YO");
});


module.exports = app;