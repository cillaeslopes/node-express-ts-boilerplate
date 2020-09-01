var express = require("express");
var app = express();

app.listen(8080, () => {
  console.log("Server listening at 8080...");
});

app.get("/", (req, res) => {
  res.send("Got it");
});
