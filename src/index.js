const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT_NUM = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    fs.readFile("./public/index.html", (err, html) => {
        if (err) console.log(err);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    });
});

app.listen(PORT_NUM, () => {
    console.log("server ready");
});