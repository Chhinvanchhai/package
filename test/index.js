const express = require("express");
const app = express();
const  form =  require("print-form");

app.get("/", function (req, res) {
  console.log(form.hello())
  res.sendFile(__dirname + "/index.ejs");
});

app.listen(9000, function () {
  console.log("Listening on port 9000!");
});