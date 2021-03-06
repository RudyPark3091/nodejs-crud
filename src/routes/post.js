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

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  Posts.findByPk(parseInt(id)).then(data => {
    const id = data.dataValues.id;
    const title = data.dataValues.title;
    const author = data.dataValues.author;
    const content = data.dataValues.content;

    res.render("post", {
      "title": "POST",
      "data": {
        "id": id,
        "title": title,
        "author": author,
        "content": content
      },
      "loginAs": req.loginAs
    });
  }).catch(err => {
    console.error(err);
  });
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  Posts.findByPk(parseInt(id)).then(data => {
    data.destroy();
  }).then(() => {
    res.send('ok');
  }).catch(err => {
    console.error(err);
  });
})

module.exports = router;
