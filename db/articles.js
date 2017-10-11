//jshint esversion:6
class Articles {
  constructor(){
    this._collection = [];
  }

  getArticles (){
    return this._collection;
  }

  post (data){
    let isRepost = productIsRepost(data.name, this._collection);
    if(isRepost === true){
    const newProduct = {
      id : ++this._productIds,
      title : data.title,
      body : data.body,
      author : data.author
    };
    this._collection.push(newProduct);
    return newProduct;
    }
  }


}

module.exports = Articles;