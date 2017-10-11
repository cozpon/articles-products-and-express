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
      console.log(newArticle);
      return newArticle;
      }
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