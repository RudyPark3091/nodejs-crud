const express = require('express');
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");
const cookieParser = require("cookie-parser");

/* // cookie example
router.use('/', (req, res, next) => {
  res.cookie('firstCookie', 'cookie!', {
    maxAge: 3000
  });
  next();
});
*/

router.use((req, res, next) => {
  if (req.cookies.userAlias) {
    req.loginAs = req.cookies.userAlias;
  } else {
    req.loginAs = null;
  }
  next();
})

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
      "createdAt": dates,
      "loginAs": req.cookies.userAlias
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

router.post('/logout', (req, res, next) => {
  res.clearCookie('userAlias');
  res.send('logout');
});

module.exports = router;
