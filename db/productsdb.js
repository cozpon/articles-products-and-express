//jshint esversion:6
//const app = require('./server');
const pgp = require('pg-promise')();
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'products_and_articles',
    user: 'ricky',
};
const db = pgp(connection);

class Products {
  listAll() {
    let query = 'SELECT id, name, price, inventory FROM products;';
    return db.query(query)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
  }

  listOne(id) {
    console.log(id, "YO");
    let query = 'SELECT id, name, price, inventory FROM products WHERE id = $1;';
    let params = id;
    return db.one(query, params)
    .then((product) => {
      return product;
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
  }

  create(data) {
    const product = {
      id : data.id,
      name : data.name,
      price : data.price,
      inventory : data.inventory
    };
    if (!product.name || !product.price || !product.inventory) {
      throw new Error ('invalid');
    }
    let query = 'INSERT INTO products (name, price, inventory) VALUES ($1, $2, $3)';
    let params = [product.name, product.price, product.inventory];
    return db.one(query, params)
      .then((data) => {
        console.log('DATA', data);
        return data;
      })
      .catch((error) => {
        console.log('ERROR: 2', error); // print error
      });
  }

  update(id) {
    let query = 'SELECT * FROM products WHERE id = $1';
    let params = id;
    return db.one(query, params)
    .then((product) => {
      console.log(product);
      return product;
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
  }
}


module.exports = Products;
