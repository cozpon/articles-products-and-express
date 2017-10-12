//jshint esversion:6
const express = require('express');
const router = express.Router();
const Products = require('../db/products');
let productsDB = new Products();

router.get('/new', (req, res) => {
  return res.render('partials/products/new');
});

router.get('/:id/edit', (req, res) => {
  let id = parseInt(req.params.id);
  let foundProduct = productsDB.getProduct(id);
  console.log(foundProduct);
  res.render('partials/products/edit', foundProduct);
});

router.route('/')
  .get((req, res) => {
    console.log('GET');
    let products = {
      productsList : productsDB.getProducts()
    };
    return res.render('partials/products/index', products);
  })
  .post((req, res) => {
    console.log('POST');
    let data = req.body;
    let successful = productsDB.post(data);
    if(successful) {
      return res.redirect('/products');
    } else {
        return res.redirect(400, '/products/new');
      }
  });

router.route('/:id')
  .put((req, res) => {
    let id = parseInt(req.params.id);
    let replacementData = req.body;
    let successful = productsDB.putProduct(id, replacementData);
    if(successful){
      res.redirect(`/products/${req.params.id}`);
    } else {
      res.redirect(400, `/products/${req.params.id}/edit`);
    }
  })
  .get((req, res) => {
    let id = parseInt(req.params.id);
    let products = {
      productList : productsDB.getProduct(id)
    };
    return res.render('partials/products/product', productsDB.getProduct(id));
  })
  .delete((req, res) => {
    let id = parseInt(req.params.id);
    let isDeleted = productsDB.deleteProduct(id);
    if(isDeleted){
      res.redirect(`/products`);
    } else {
      res.redirect(400, `/products/${req.params.id}`);
    }
  });

module.exports = router;