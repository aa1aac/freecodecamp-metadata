const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", multer().single("file"), (req, res, next) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("deployed on port " + PORT);
});
