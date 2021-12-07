const express = require("express");
const logger = require("morgan");

const { generateMBI, validateMBI } = require("../util/helpers.js");

const app = express();

// picking up static files from parcel
app.use(express.static("./client/dist"));

// setting up how noisy the logs should be
app.use(logger("dev"));

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// choose status code
app.get("/api/generate", (req, res) => {
  res.json({ data: generateMBI() });
});

//   choose status code
app.post("/api/validate", (req, res) => {
  res.json({ data: validateMBI(req.body.data) });
});

// assume 404 since no middleware responded
app.use(function (req, res, next) {
  res.status(404).render("404", { url: req.originalUrl });
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Server is listening on ${port}`);
