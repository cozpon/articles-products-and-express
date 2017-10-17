//jshint esversion:6
const express = require('express');
const router = express.Router();

const productsClass = require('../db/productsdb');
const products = new productsClass();

router.get('/new',(req, res) => {
  return res.render('partials/products/new');
});

router.route('/')
  .get((req, res) => {
    products.listAll()
    .then((products) => {
      let locals = {
        products : products
      };
      return res.render('partials/products/index', locals);
    });
  })
  .post((req, res) => {
    let data = req.body;
    let result = products.create(data)
    .then((product) => {
      return res.send(product);
    });
  });

router.route('/:id')
  .get ((req, res) => {
    let productId = req.params.id;
    let product = products.listOne(productId)
    .then((product) => {
      let local = {
        product : product
      };
      return res.render('partials/products/product', local);
    });
  });

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  console.log(id);
  let foundProduct = products.update(id)
  .then((product) => {
    return res.render('partials/products/edit',foundProduct);
  });

});


module.exports = router;
