const express = require("express");
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");

router.use((req, res, next) => {
  if (req.cookies.userAlias) {
    req.loginAs = req.cookies.userAlias;
    next();
  } else {
    res.status(403).send("unauthenticated");
  }
});

router.get('/', (req, res, next) => {
  res.render('save', {
    title: 'SAVE',
    loginAs: req.loginAs
  });

  // sequelize.sync({force: true});
});

router.post('/', (req, res, next) => {
  Posts.create({
    title: req.body.title,
    author: req.loginAs,
    content: req.body.content
  }).then(() => {
      res.send('ok');
    }
  ).catch(err => {
    console.error(err);
  });
});

router.put('/', (req, res, next) => {
  Posts.update({
    title: req.body.title,
    content: req.body.content
  }, {
    where: {
      id: parseInt(req.body.id)
    }
  }).then(() => {
    res.send('ok');
  }).catch(err => {
    console.error(err);
  })
})

module.exports = router;
