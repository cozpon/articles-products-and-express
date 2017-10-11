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

  putProduct(id, name){
    for(let i = 0; i < this._collection.length; i++){
    if(id === this._collection[i].id) {
      let matched = this._collection[i];
      let editedName = matched.name = name;
      return editedName;
      }
    }
  }
}
  // }
  //   let findMatch = findID(id, this._collection);
  //   // const editedProduct = {
  //   //   id : id,
  //   //   name : findMatch.name
  //   //   price :


    // console.log(name, "NEW NAME");
    // return name;



function productIsRepost(name, collection) {
    let isRepost = true;
    for(let i = 0; i < collection.length; i++){
      if(name === collection[i].name) isRepost = false;
    }
    return isRepost;
  }

// function findID(id, collection){
//   for(let i = 0; i < collection.length; i++){
//     if(id === collection[i].id) {
//       return collection[i];
//     }
//   }
// }

module.exports = Products;


