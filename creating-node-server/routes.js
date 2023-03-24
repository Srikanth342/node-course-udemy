const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>Enter Message</title></head>`);
    res.write(
      `<body>
        <form action="/message" method="POST">
        <input id="message" name="message" type="text"/>
        <button type="submit">Send</button>
        </form>
        </body>`
    );
    res.write(`</html`);
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader(`Location`, "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>`);
  res.write(`<head><title>my first node app</title></head>`);
  res.write(`<body><h1>Hello this is from node.js</h1></body>`);
  res.write(`</html`);
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: "Hello the other way to export",
};
