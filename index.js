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
    let query = 'SELECT (id, name, price, inventory) FROM products;';
    return db.any(query)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
  }
  post (data) {
    const newProduct = {
      id : data.id,
      name : data.name,
      price : data.price,
      inventory : data.inventory
    };
    if (!newProduct.name || !newProduct.price || !newProduct.inventory) {
      throw new Error ('invalid');
    }
    return db.one('INSERT INTO products (name, price, inventory) VALUES ($1, $2, $3)', [newProduct.name, newProduct.price, newProduct.inventory])
      .then((data) => {
        console.log('DATA', data);
        return data; // print new user ID;
      })
      .catch((error) => {
        console.log('ERROR:', error); // print error
      });
    }
  }


module.exports = Products;


//     let query = 'INSERT INTO products VALUES($2, $3, $4)';
//     let params = [name, price, inventory];
//     return db.any(query, params);
//   }


