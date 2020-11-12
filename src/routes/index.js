const express = require('express');
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");
const cookieParser = require("cookie-parser");

/*
router.use('/', function(req, res, next) {
  res.writeHead(200, {
    'Set-Cookie': ['firstCookie=cookie!', 'secondCookie=ck']
  });
  next();
});
*/

router.use('/', (req, res, next) => {
  res.cookie('firstCookie', 'cookie!', {
    maxAge: 3000
  });
  next();
});

router.get('/', (req, res, next) => {
  const posts = Posts.findAll().then(posts => {
    const ids = [];
    const titles = [];
    const authors = [];
    const contents = [];
    const dates = [];

    posts.forEach(post => {
      ids.push(post.dataValues.id);
      titles.push(post.dataValues.title);
      authors.push(post.dataValues.author);
      contents.push(post.dataValues.content);
      dates.push(post.dataValues.createdAt);
    });
    const next = {
      "ids": ids,
      "titles": titles,
      "authors": authors,
      "contents": contents,
      "createdAt": dates
    };
    return next;
  }).then(items => {
    res.render('index', {
      'title': 'BOARD',
      'items': items
    });
  }).catch(err => {
    console.error(err);
  });
});

module.exports = router;
