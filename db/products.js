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
    let isNotRepost = productIsRepost(data.name, this._collection);
    if(isNotRepost === true){
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
    console.log(data);
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
        console.log("This", this._collection);
        console.log("i", i);
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
  let isNotRepost = true;
  for(let i = 0; i < collection.length; i++){
    if(name === collection[i].name) isNotRepost = false;
  }
  return isNotRepost;
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

function findItem(array, title) {
  return array.find(item => {
    return item.title === title;
  });
}



module.exports = Products;


