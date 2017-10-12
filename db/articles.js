//jshint esversion:6
class Articles {
  constructor(){
    this._collection = [];
  }

  getArticles (){
    return this._collection;
  }
  post (article){
    let isRepost = articleIsRepost(article.title, this._collection);
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
  putArticle(url, data){
    for(let i = 0; i < this._collection.length; i++){
      if(url === this._collection[i].URL) {
        const newArticle = {
          title : data.title,
          body : data.body,
          author : data.author,
          URL : encodeURI(data.title),
        };
      this._collection[i] = newArticle;
      return newArticle;
      }
    }
  }
  getArticle(url){
    for(let i = 0; i < this._collection.length; i++){
      if(url === this._collection[i].URL){
        return this._collection[i];
      }
    }
  }
  deleteArticle(url){
    let toDelete = getIndexByUrl(url, this._collection);
    let isDeleted = false;
    if(toDelete !== null){
      this._collection.splice(toDelete, 1);
      isDeleted = true;
    }
    return isDeleted;
  }

}

function getIndexByUrl(url, collection){
  let index = null;
  for(let i = 0; i < collection.length; i++){
    if(url === collection[i].URL){
      index = i;
    }
  }
  return index;
}

function articleIsRepost(title, collection) {
  let isRepost = true;
  for(let i = 0; i < collection.length; i++){
    if(title === collection[i].title) isRepost = false;
  }
  return isRepost;
}

module.exports = Articles;