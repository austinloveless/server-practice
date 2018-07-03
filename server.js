const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = process.env.PORT || 8000;

app.disable("x-powered-by");
app.use(bodyParser.json());

app.get("/:color", (req, res) => {
  res.json(req.params.color);
});

app.get("/*", (req, res) => {
  res.status(404).send("Error you need to pick a color") ||
    res.status(500).send("Server Error");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
