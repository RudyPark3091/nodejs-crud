const express = require("express");
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");

router.get('/', (req, res, next) => {
  res.render('save', {
    title: 'save'
  });

  // sequelize.sync({force: true});
});

router.post('/', (req, res, next) => {
  Posts.create({
    title: req.body.title,
    author: req.body.author,
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
    author: req.body.author,
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