const hackerData = require("./data/hackers.json");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// Define Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);

// * Routes
router.get("/", (req, res) => {
  res.json({});
});

// * Routes
router.get("/:id?", (req, res) => {
  res.json({});
});

app.listen(port, () => {
  console.log(`API Listening On Port ${port}`);
});
