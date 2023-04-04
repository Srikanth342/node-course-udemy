const express = require("express");
const userList = require("./routes/usersList");
const addUserData = require("./routes/addUser");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(addUserData.routes);

app.use(userList);

app.listen(3000);
