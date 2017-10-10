//jshint esversion:6
const express = require('express');
const router = express.Router();
let productStorage = [];
const productDB = require('../db/products');

router.route('/')
  .get((req, res) => {
    console.log('GET');
    let products = {
      productList : productDB.getProduct()
    };
    res.send(products);
  })
  .post((req, res) => {
    console.log('POST');
     productDB.addProduct(req, res);
  });



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


module.exports = router;
