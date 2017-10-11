//jshint esversion:6
const express = require('express');
const router = express.Router();
const Articles = require('../db/articles');
let pass = {"sucess": true};
let fail = {"sucess": false};
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
      return res.redirect(200, './products');
    } else {
        return res.redirect(400, './products/new');
      }
    // creates new article:
      // { title: String, body: String, author: String }
      // from this request, you save data with urlTitle { title: String, body: String, author: String, urlTitle: String }
        // title is unique identifier for this item
        // urlTitle is similar to the title that was passed in, but instead is a URL encoded version
        // The Best Developer would be url-encoded to The%20Best%20Developer
    // if successful redirect to the /articles route
    // if not successful, send user back to NEW article route /articles/new and find some way to throw error
  });

router.route('/:title')
  .get((req, res) => {
    // respons with HTML generated from template which displays Article information with corresponding title
      // file name: article.hbs
  })
  .put((req, res) => {
    //edits a product, finds article in collection with same TITLE & edits it
      // incoming field should be { title: String, ... } where server finds an article with TITLE property matching input
      // if successful, redirects user back to /articles/:title route, where :title is edited page
      // if unsuccessful, send user back to edit page again /article/:title/edit, and throw error
  })
  .delete((req, res) => {

  });

router.get('/new', (req, res) => {
  // contain empty form for user to create new article
  // form points to server's route for creating new article
    // file name: new.hbs
});

module.exports = router;
