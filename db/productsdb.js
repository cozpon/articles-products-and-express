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
    let query = 'SELECT id, name, price, inventory FROM products ORDER BY id;';
    return db.query(query)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
  }

  listOne(id) {
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
    let query = 'INSERT INTO products (name, price, inventory) VALUES ($1, $2, $3);';
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

  update(id, replacementData) {
    console.log(replacementData, "YO");
    console.log(id, "ID");
    let updateQuery = 'UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4;';
    let params = [replacementData.name, replacementData.price, replacementData.inventory, id];
    return db.none(updateQuery, params)
    .then((product) => {
      return product;
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
  }

  delete(id) {
    console.log(id);
    let deleteQuery = 'DELETE FROM products WHERE id = $1;';
    let params = id;
    return db.none(deleteQuery, params)
    .then ((product) => {
      return product;
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
  }
}


module.exports = Products;
