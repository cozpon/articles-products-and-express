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






module.exports = router;