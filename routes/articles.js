//jshint esversion:6
const express = require('express');
const router = express.Router();
const Articles = require('../db/articles');
let articlesDB = new Articles();

router.route('/')
  .get((req, res) => {
    console.log('GET');
    let articles = {
      articlesList : articlesDB.getArticles()
    };
    return res.send(articles);
  })
  .post((req, res) => {
    console.log('POST');
    let data = req.body;
    let successful = articlesDB.post(data);
    if(successful) {
      return res.redirect(200, './articles');
    } else {
        return res.redirect(400, './articles/new');
      }
  });

router.route('/:title')
  .get((req, res) => {
    console.log(req.params.title, "FIRST");
    let url = encodeURI(req.params.title);
    let articles = {
      articlesList : articlesDB.getArticle(url)
    };
    return res.send(articles);
  })
  .put((req, res) => {
    let url = encodeURI(req.body.title);
    let replacementData = req.body;
    let successful = articlesDB.putArticle(url, replacementData);
    if(successful){
      res.redirect(200, `/articles/${url}`);
    } else {
      res.redirect(400, `/articles/${url}/edit`);
      }
  })
  .delete((req, res) => {

  });

router.get('/new', (req, res) => {
  // contain empty form for user to create new article
  // form points to server's route for creating new article
    // file name: new.hbs
});

module.exports = router;
