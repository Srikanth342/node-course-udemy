const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  const dataDirPath = path.join(path.dirname(require.main.filename), "data");
  if (!fs.existsSync(dataDirPath)) {
    fs.mkdirSync(dataDirPath);
  }
  const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log("error", error);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
