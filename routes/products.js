//jshint esversion:6
const express = require('express');
const router = express.Router();
let productStorage = [];
const Products = require('../db/products');
let pass = {"sucess": true};
let fail = {"sucess": false};
let products = new Products();

router.route('/')
  .get((req, res) => {
    console.log('GET');
    let Products = {
      productsList : products.getProduct()
    };
    return res.send(Products);
  })
  .post((req, res) => {
    console.log('POST');
    let data = req.body;
    products.post(data);
    return res.json(pass);
  });

module.exports = router;













// router.route('/:id')
//     .put((req, res) => {
//       for(let i = 0; i < productStorage.length; i++){ // I know my storage is limited to 5
//       if(productStorage[i].id === `${id}`){
//         return res.send({'success': true});

//         }
//       }
//     })
//     .delete((req, res) => {
//       if (!req.body || !req.body.buzzWord || !req.body.heard){
//         res.json(fail);
//         return res.sendStatus(400);
//       }

//     });



