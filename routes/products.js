//jshint esversion:6
const express = require('express');
const router = express.Router();

const Products = require('../index');
const productsClass = new Products();

router.route('/')
  .get((req, res) => {
    let productsList = productsClass.listAll();
    return res.json(productsList);
  })
  .post((req, res) => {
    let data = req.body;
    let result = productsClass.post(data);
    return res.json(result);
  });

module.exports = router;
