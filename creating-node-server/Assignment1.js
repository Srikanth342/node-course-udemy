const http = require("http");
const { buffer } = require("stream/consumers");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`<html>`);
    res.write(`<head><title>My first Assignment</title></head>`);
    res.write(
      `<body><form action="/create-user" method="POST"><input id="user" name="user" type="text"/>
      <button type="submit">create user</button></form></body>`
    );
    res.write(`</html>`);
    res.end();
  }
  if (url === "/users") {
    res.write(`<html>`);
    res.write(`<head><title>My first Assignment</title></head>`);
    res.write(
      `<body><ul><li>Srikanth</li><li>Sri Ram</li><li>Sardar</li><li>Gopi</li></ul></body>`
    );
    res.write(`</html>`);
    res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", (error) => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("error", parsedBody.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
});

server.listen("4000");
