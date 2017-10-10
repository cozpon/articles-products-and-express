//jshint esversion:6
const express = require('express');
const router = express.Router();
let productStorage = [];
const productDB = require('./db/products');


let i = 1;

router.route('/')
  .get((req, res) => {
    console.log( '/ get');
    let products = {
      productList : productDB.getProduct()
    };
    res.render('./products/index', products);
//   })
//   .post((req, res) => {
//     if (!req.body || !req.body.name || !req.body.price || !req.body.inventory){
//       res.json(fail);
//       //return reroute to /products/new & throw error
//     } else {
//     res.json(req.body);
//     req.id = "id: " + i++;
//     req.body.inventory = i++;
//     productStorage.push(req.body);
//     }

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
