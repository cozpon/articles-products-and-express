//jshint esversion:6
class Articles {
  constructor(){
    this._collection = [];
  }

  getArticles (){
    return this._collection;
  }
  post (article){
    let isRepost = articleIsRepost(article.name, this._collection);
    if(isRepost === true){
      const newProduct = {
        title : article.title,
        body : article.body,
        author : article.author,
        URL : encodeURI(article.title),
      };
    this._collection.push(newProduct);
    return newProduct;
    }
  }


}



function articleIsRepost(name, collection) {
    let isRepost = true;
    for(let i = 0; i < collection.length; i++){
      if(name === collection[i].name) isRepost = false;
    }
    return isRepost;
  }

module.exports = Articles;