const http = require("http");

const express = require("express");

const app = express();

app.use(`/add-product`, (req, res, next) => {
  console.log("second middleWare");
  res.send(`<h1>Add Product</h1>`);
});

app.use(`/`, (req, res, next) => {
  console.log("second middleWare");
  res.send(`<h1>Hello Welcome Express js</h1>`);
});

app.listen(3000);
