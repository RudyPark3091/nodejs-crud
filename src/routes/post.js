const express = require("express");
const router = express.Router();
const { sequelize } = require("../model/model.js");
const Posts = require("../model/posts.js");

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  Posts.findByPk(parseInt(id)).then(data => {
    const title = data.dataValues.title;
    const author = data.dataValues.author;
    const content = data.dataValues.content;

    res.render("post", {
      "title": "post",
      "data": {
        "title": title,
        "author": author,
        "content": content
      }
    });
  }).catch(err => {
    console.error(err);
  });
})

module.exports = router;
