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
    content: req.body.content
  }).then((res) => {
      console.log(res);
    }
  ).catch(err => {
    console.error(err);
  });
});

module.exports = router;