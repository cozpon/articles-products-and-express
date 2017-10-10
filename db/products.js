// response
//jshint esversion:6

class Products {
  constructor () {
    this._collection = [];
    this._productIds = 0;
  }
  getProduct(){
    return this._collection;
  }
  post (data){
    const newProduct = {
      id : ++this._productIds,
      name : data.name,
      price : data.price,
      inventory : data.inventory

    };
    this._collection.push(newProduct);
    return newProduct;
  }
  find (id) {

  }
}


module.exports = Products;











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
