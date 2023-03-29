const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser?.urlencoded({ extended: false }));

// Parsing incoming request

app.use(`/add-product`, (req, res, next) => {
  res.send(`<html>
  <head>
    <title>My First Express</title>
  </head>
  <body>
    <form action="/product" method="POST">
      <input type="text" name="title" id="title"/>
      <button type="submit">Add Product</button>
    </form>
  </body>
  </html>`);
});

app.post(`/product`, (req, res, next) => {
  console.log(req?.body);
  res.redirect("/");
});

app.use(`/`, (req, res, next) => {
  res.send(`<h1>Hello Welcome Express js</h1>`);
});

// The below commented code is basic express setup
// app.use(`/add-product`, (req, res, next) => {
//   console.log("second middleWare");
//   res.send(`<h1>Add Product</h1>`);
// });

// app.use(`/`, (req, res, next) => {
//   console.log("second middleWare");
//   res.send(`<h1>Hello Welcome Express js</h1>`);
// });

app.listen(3000);
