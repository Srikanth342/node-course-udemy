const path = require("path");

const express = require("express");
const adminData = require("./admin");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("adminData", adminData.products);
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
  // res.sendFile(path.join(rootDir, "views", "shop."));
});

module.exports = router;
