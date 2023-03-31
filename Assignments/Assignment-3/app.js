const express = require("express");
const mainRoute = require("./router/index");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoute);

app.listen(3000);
