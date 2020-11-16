const express = require('express');
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");
const Users = require("../model/users.js");
const cookieParser = require("cookie-parser");

router.use('/', (req, res, next) => {
  res.render('login', {
    'title': 'LOGIN'
  });

  // TODO: login success -> redirect to index page
  // login failure -> alert and remain on current page
  next();
});

router.get('/', (req, res, next) => {
  Users.findOne({where: { alias: "SampleUser" }}).then(user => {
    if (user) {
      // sample user already exists
    } else {
      Users.create({
        email: "asdf@gmail.com",
        password: "asdfasdf",
        alias: "SampleUser"
      });
    }
  }).catch(err => {
    console.error(err);
  });
});

module.exports = router;

