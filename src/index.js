const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT_NUM = 3000;

const indexRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);

app.listen(PORT_NUM, () => {
  console.log("server ready");
});