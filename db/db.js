//jshint esversion:6
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
    return db.oneOrNone(query, params)
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
    return db.oneOrNone(query, params)
      .then((data) => {
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




class Articles {
  listAll() {
    let query = 'SELECT title, author, body FROM articles ORDER BY id;';
    return db.query(query)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
  }
  create(data) {
    console.log(data.title);
    console.log(encodeURI(data.title));
    const article = {
      id : data.id,
      title : data.title,
      author : data.author,
      body : data.body,
      URL : encodeURI(data.title)
    };
    if (!article.title || !article.author || !article.body) {
      throw new Error ('invalid');
    }
    let query = 'INSERT INTO articles (title, author, body, unique_url) VALUES ($1, $2, $3, $4);';
    let params = [article.title, article.author, article.body, article.URL];
    return db.oneOrNone(query, params)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log('ERROR: 2', error); // print error
      });
  }
  listOne(url) {
    let listQuery = 'SELECT id, title, author, body FROM articles WHERE unique_url = $1;';
    let params = url;
    return db.oneOrNone(listQuery, params)
    .then((article) => {
      return article;
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
  }
  update(url, replacementData) {
    console.log(replacementData, "REAPLCE");
    console.log(url, "ID");
    let updateQuery = 'UPDATE articles SET title = $1, author = $2, body = $3, unique_url = $5 WHERE unique_url = $4;';
    let params = [replacementData.title, replacementData.author, replacementData.body, url, encodeURI(replacementData.title)];
    return db.none(updateQuery, params)
    .then((article) => {
      return article;
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
  }
  delete(url) {
    console.log(url);
    let deleteQuery = 'DELETE FROM articles WHERE unique_url = $1;';
    let params = url;
    return db.oneOrNone(deleteQuery, params)
    .then((article) => {
      return article;
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
  }

}


module.exports = {
  Products : Products,
  Articles : Articles
};
