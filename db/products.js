//jshint esversion:6
class Products {
  constructor () {
    this._collection = [];
    this._productIds = 0;
  }
  getProduct (){
    return this._collection;
  }
  post (data){
    let isRepost = productIsRepost(data.name, this._collection);
    if(isRepost === true){
    const newProduct = {
      id : ++this._productIds,
      name : data.name,
      price : data.price,
      inventory : data.inventory
    };
    this._collection.push(newProduct);
    return newProduct;
    }
  }
  find (id) {

  }

}

function productIsRepost(name, collection) {
    let isRepost = true;
    for(let i = 0; i < collection.length; i++){
      if(name === collection[i].name) isRepost = false;
    }
    return isRepost;
  }

module.exports = Products;


