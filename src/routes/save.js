const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('save', {
    title: 'save'
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
})

module.exports = router;