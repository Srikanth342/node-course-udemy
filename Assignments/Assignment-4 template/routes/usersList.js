const express = require("express");
const addUserData = require("./addUser");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("ListOfUsers", addUserData.userList);
  res.render("usersList", { users: addUserData.userList, pageTitle: "Users" });
});

module.exports = router;
