//jshint esversion:6
const express = require('express');
const router = express.Router();
const Products = require('../db/products');
let productsDB = new Products();

router.route('/')
  .get((req, res) => {
    console.log('GET');
    let products = {
      productsList : productsDB.getProducts()
    };
    return res.send(products);
  })
  .post((req, res) => {
    console.log('POST');
    let data = req.body;
    let successful = productsDB.post(data);
    if(successful) {
      return res.redirect(200, './products');
    } else {
        return res.redirect(400, './products/new');
      }
  });

router.route('/:id')
  .put((req, res) => {
    let id = parseInt(req.params.id);
    let replacementData = req.body;
    let successful = productsDB.putProduct(id, replacementData);
    if(successful){
      res.redirect(200, `/products/${req.params.id}`);
    } else {
      res.redirect(400, `/products/${req.params.id}/edit`);
    }
  })
  .get((req, res) => {
    let id = parseInt(req.params.id);
    let products = {
      productList : productsDB.getProduct(id)
    };
    return res.send(products);
  })
  .delete((req, res) => {
    let id = parseInt(req.params.id);
    let isDeleted = productsDB.deleteProduct(id);
    if(isDeleted){
      res.redirect(200, `/products`);
    } else {
      res.redirect(400, `/products/${req.params.id}`);
    }
  });

module.exports = router;