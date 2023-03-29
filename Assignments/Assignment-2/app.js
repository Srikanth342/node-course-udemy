const express = require("express");

const app = express();

//First Task
// app.use((req, res, next) => {
//   console.log("First Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Middleware");
//   res.send(`<h1>Assignment-2 is almost done</h1>`);
// });

//Second Task
app.use("/users", (req, res, next) => {
  res.send("<h1>The Middleware that handle just /users </h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>The Middleware that handle just / </h1>");
});

app.listen(3000);
