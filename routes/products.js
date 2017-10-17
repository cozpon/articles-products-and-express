//jshint esversion:6
const express = require('express');
const router = express.Router();

const productsClass = require('../db/productsdb');
const products = new productsClass();

router.route('/')
  .get((req, res) => {
    let productsList = products.listAll()
    .then((products) => {
      return res.send(products);
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
      return res.send(product);
    });
  });

module.exports = router;
