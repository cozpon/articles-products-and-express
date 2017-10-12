//jshint esversion:6
const express = require('express');
const router = express.Router();
const Articles = require('../db/articles');
let articlesDB = new Articles();

router.get('/new', (req, res) => {
  return res.render('partials/articles/new');
});

router.get('/:title/edit', (req, res) => {
  let url = encodeURI(req.params.title);
  let foundProduct = articlesDB.getArticle(url);
  res.render('partials/articles/edit', foundProduct);
});

router.route('/')
  .get((req, res) => {
    let articles = {
      articlesList : articlesDB.getArticles()
    };
    return res.render('partials/articles/index', articles);
  })
  .post((req, res) => {
    let data = req.body;
    let successful = articlesDB.post(data);
    if(successful) {
      return res.redirect('/articles');
    } else {
        return res.redirect(400, './articles/new');
      }
  });

router.route('/:title')
  .put((req, res) => {
    let url = encodeURI(req.params.title);
    let replacementData = req.body;
    let successful = articlesDB.putArticle(url, replacementData);
    if(successful){
      res.redirect(`/articles/${url}`);
    } else {
      res.redirect(400, `/articles/${url}/edit`);
    }
  })
  .get((req, res) => {
    let url = encodeURI(req.params.title);
    let articles = {
      article : articlesDB.getArticle(url)
    };
    return res.render('partials/articles/article', articlesDB.getArticle(url));
  })
  .delete((req, res) => {
    let url = encodeURI(req.params.title);
    let isDeleted = articlesDB.deleteArticle(url);
    if(isDeleted){
      res.redirect(`/articles`);
    } else {
      res.redirect(400, `/articles/${url}`);
    }
  });

module.exports = router;
