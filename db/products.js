//jshint esversion:6
class Products {
  constructor () {
    this._collection = [];
    this._productIds = 0;
  }
  getProducts (){
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
  putProduct(id, data){ // use FIND method on arrays
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
  getProduct(id){
  let ID = parseFloat(id);
    for(let i = 0; i < this._collection.length; i++){
      if(ID === this._collection[i].id){
        return this._collection[i];
      }
    }
  }
  deleteProduct(id){
    let toDelete = getIndexById(id, this._collection);
    let isDeleted = false;
    if(toDelete !== null){
      this._collection.splice(toDelete, 1);
      isDeleted = true;
    }
    return isDeleted;
  }

}


function productIsRepost(name, collection) {
  let isRepost = true;
  for(let i = 0; i < collection.length; i++){
    if(name === collection[i].name) isRepost = false;
  }
  return isRepost;
}

function getIndexById(id, collection){
  let ID = parseFloat(id);
  let index = null;
  for(let i = 0; i < collection.length; i++){
    if(ID === collection[i].id){
      index = i;
    }
  }
  return index;
}



module.exports = Products;


