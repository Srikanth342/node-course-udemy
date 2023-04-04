const express = require("express");

const router = express.Router();

const ListOfUsers = [];

router.get("/add-user", (req, res, next) => {
  res.render("addUser", { pageTitle: "Add User" });
});

router.post("/add-user", (req, res, next) => {
  ListOfUsers.push({ userName: req.body.name });
  res.redirect("/");
});

exports.routes = router;
exports.userList = ListOfUsers;
