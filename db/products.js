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
  putProduct(id, data){
    for(let i = 0; i < this._collection.length; i++){
    if(id === this._collection[i].id) {
      let matched = this._collection[i];
       const newProduct = {
        id : this._collection[i].id,
        name : data.name,
        price : data.price,
        inventory : data.inventory
      };
      this._collection[i] = newProduct;
      console.log(newProduct);
      return newProduct;
      }

    }
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


