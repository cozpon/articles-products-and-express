// response
//jshint esversion:6
( function() {
let productStorage = [];


function getProduct(){
  return productStorage;
}

function addProduct(req, res){
  productStorage.push(req.body);
  return res.send({'success': true});
}



module.exports = {
  getProduct,
  addProduct
};

})();

// class Products {
//   constructor(){
//     this._collection = [];
//   }
// //   storeData(req.body){
// //     if _data.push(req.body){
// //       return {success: true}
// //     }
// //   }
// }






// //POST:    /products
// if (!req.body || !req.body.name || !req.body.price || !req.body.inventory){
//   res.json(fail);
//   //return reroute to /products/new & throw error
// } else {
//   let postData = {
//     isSuccessful: true,
//     content: { id: Number, name: String, price: Number, inventory: Number }
//   };

//   res.render('home', postData);
// }
