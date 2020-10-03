const express = require('express');
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");

router.get('/', (req, res, next) => {
  const posts = Posts.findAll().then(posts => {
    const titles = [];
    const authors = [];
    const contents = [];
    const dates = [];

    posts.forEach(post => {
      titles.push(post.dataValues.title);
      authors.push(post.dataValues.author);
      contents.push(post.dataValues.content);
      dates.push(post.dataValues.createdAt);
    });
    const next = {
      "titles": titles,
      "authors": authors,
      "contents": contents,
      "createdAt": dates
    };
    return next;
  }).then(items => {
    res.render('index', {
      'title': 'BOARD SERVICE',
      'items': items
    });
  }).catch(err => {
    console.error(err);
  });
});

module.exports = router;
