//jshint esversion:6
const express = require('express');
const router = express.Router();
const Articles = require('../db/articles');
let articlesDB = new Articles();

router.get('/new', (req, res) => {
  return res.render('partials/articles/new');
});

router.route('/')
  .get((req, res) => {
    console.log('GET');
    let articles = {
      articlesList : articlesDB.getArticles()
    };
    return res.render('partials/articles/index', articles);
  })
  .post((req, res) => {
    console.log('POST');
    let data = req.body;
    let successful = articlesDB.post(data);
    if(successful) {
      return res.redirect(200, '/articles');
    } else {
        return res.redirect(400, './articles/new');
      }
  });

router.route('/:title')
  .get((req, res) => {
    let url = encodeURI(req.params.title);
    let articles = {
      article : articlesDB.getArticle(url)
    };
    return res.render('partials/articles/:title', articles);
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
    let url = encodeURI(req.body.title);
    let isDeleted = articlesDB.deleteArticle(url);
    if(isDeleted){
      res.redirect(200, `/articles`);
    } else {
      res.redirect(400, `/articles/${url}`);
    }
  });



module.exports = router;
