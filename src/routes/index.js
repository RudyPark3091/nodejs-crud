const express = require('express');
const router = express.Router();
const ejs = require("ejs");

router.get('/', (req, res, next) => {
  res.render('index', {title: 'BOARD SERVICE'});
});

module.exports = router;