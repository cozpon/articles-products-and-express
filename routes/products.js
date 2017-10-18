//jshint esversion:6
const express = require('express');
const router = express.Router();
const database = require('../db/db');
const products = new database.Products();

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
      return res.redirect('/products');
    })
    .catch((error) => {
      console.log(error);
    });
  });

router.route('/:id')
  .get ((req, res) => {
    let id = req.params.id;
    let product = products.listOne(id)
    .then((product) => {
      let local = {
        product : product
      };
      return res.render('partials/products/product', local);
    });
  })
  .put ((req, res) => {
    let id = req.params.id;
    let update = products.update(id, req.body)
    .then((product) => {
      let local = {
        product : product
      };
      return res.redirect('/products');
    });
  })
  .delete((req, res) => {
    let id = req.params.id;
    let isDeleted = products.delete(id)
    .then((product) => {
      let locals = {
        product : product
      };
      return res.redirect('/products');
    });
  });


router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  let foundProduct = products.listOne(id)
  .then((product) => {
    let locals = {
      product : product
    };
    return res.render('partials/products/edit', locals);
  });
});


module.exports = router;
