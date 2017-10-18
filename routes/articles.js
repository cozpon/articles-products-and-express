//jshint esversion:6
const express = require('express');
const router = express.Router();
const database = require('../db/db');
const articles = new database.Articles();

router.get('/new',(req, res) => {
  return res.render('partials/articles/new');
});

router.route('/')
  .get((req, res) => {
    articles.listAll()
    .then((articles) => {
      let local = {
        articles : articles
      };
      return res.render('partials/articles/index', local);
    });
  })
  .post((req, res) => {
    let data = req.body;
    let result = articles.create(data)
    .then((article) => {
      return res.redirect('/articles');
    })
    .catch((error) => {
      console.log(error);
    });
  });


router.route('/:title')
  .get ((req, res) => {
    let url = encodeURI(req.params.title);
    let article = articles.listOne(url)
    .then((article) => {
      let local = {
        article : article
      };
      return res.render('partials/articles/article', local);
    });
  })
  .put((req, res) => {
    let url = encodeURI(req.params.title);
    let update = articles.update(url, req.body)
    .then((article) => {
      let local = {
        article : article
      };
      return res.redirect('/articles');
    });
  })
  .delete((req, res) => {
    let url = encodeURI(req.params.title);
    let isDeleted = articles.delete(url)
    .then((article) => {
      let local = {
        article : article
      };
      return res.redirect('/articles');
    });
  });


router.get('/:title/edit', (req, res) => {
  let url = encodeURI(req.params.title);
  let foundArticle = articles.listOne(url)
  .then((article) => {
    let locals = {
      article : article
    };
    return res.render('partials/articles/edit', locals);
  });
});


module.exports = router;