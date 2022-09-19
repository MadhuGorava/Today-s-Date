const express = require("express");
const Express = express();

Express.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today's date is ${date}`);
});

module.exports = Express;
