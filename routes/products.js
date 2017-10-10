//jshint esversion:6
const express = require('express');
const router = express.Router();
let pass = {"sucess": true};
let fail = {"sucess": false};
let productStorage = [];



router.route('/')
  .get((req, res) => {
    res.json(req.rawHeaders);
    console.log(req.body);
  })
  .post((req, res) => {
    console.log(res.json(req.rawHeaders));
    console.log(req.body);
    // console.log(res.json(body.price));
    // productStorage.push(req.body);
    //   if (!req.body || !req.body.name || !req.body.price || !req.body.inventory){
    //       res.json(fail);
          //return reroute to /products/new & throw error
        //}
      // req.id = i;
      // req.inventory = "inven" + i;

    // creates new product
      // incoming request looks like { name: String, price: String, inventory: String }
        // from this request, you save data as { id: Number, name: String, price: Number, inventory: Number }
          // ID is unique identifier for this item, generated on the server side and will be used to access specific products
    // if successful redirect user back to the /products route
    // if unsuccessful, send user back to new products route: /products/new and throw error
  });

router.route('/:id')
    .put((req, res) => {

    })
    .delete((req, res) => {
      if (!req.body || !req.body.buzzWord || !req.body.heard){
        res.json(fail);
        return res.sendStatus(400);
      }

    });


module.exports = router;
