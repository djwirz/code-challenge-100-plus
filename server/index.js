const express = require("express");
const logger = require("morgan");

const app = express();

// setting up how noisy the logs should be
app.use(logger("dev"));

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// choose status code
app.get("/generate", (req, res) => {
  res.json({ data: "test" });
});

//   choose status code
app.post("/validate", (req, res) => {
  res.json({ data: "true" });
});

// assume 404 since no middleware responded
app.use(function (req, res, next) {
  res.status(404).render("404", { url: req.originalUrl });
});

app.listen(3000);
console.log("Express started on port 3000");
