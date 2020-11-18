const express = require('express');
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");
const Users = require("../model/users.js");
const cookieParser = require("cookie-parser");

router.use('/', (req, res, next) => {
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
  }).then(() => {
    res.render('login', {
      'title': 'LOGIN'
    });
  }).catch(err => {
    console.error(err);
  });
});

router.post('/', (req, res, next) => {
  Users.findOne({where: {
    email: req.body.email,
    password: req.body.password
  }}).then(user => {
    if (!user) {
      res.send("no user");
    } else {
      res.cookie('userAlias', user.alias, { maxAge: 1000 * 60 * 1 });
      // login valid for 1 hour
      res.send('ok');
    }
  }).catch(err => {
    console.error("error at routes/login.js: router.post");
  })
})

module.exports = router;

