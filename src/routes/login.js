const express = require('express');
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");
const cookieParser = require("cookie-parser");

router.use('/', (req, res, next) => {
  res.render('login', {
    'title': 'LOGIN'
  });

  // TODO: login success -> redirect to index page
  // login failure -> alert and remain on current page
});

module.exports = router;

