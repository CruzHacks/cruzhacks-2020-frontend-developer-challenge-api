const hackerData = require("./src/data/hackers.json");
const bodyParser = require("body-parser");
const authentication = require("./src/middleware/authentication");
const express = require("express");

// * Definitions

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// * Middleware

//app.use(authentication.validateAPIKey);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);

// * Routes

router.get("/", (req, res) => {
  const argued_id = req.params.id;

  const response = {
    code: 200,
    count: hackerData.length,
    results: hackerData
  };

  res.json(response);
});

router.get("/:id?", (req, res) => {
  const argued_id = req.params.id;

  if (argued_id < 0 || argued_id > hackerData.length - 1) {
    res.status(404);
    res.json({
      code: 404,
      count: 0,
      results: {}
    });
  }

  const response = {
    code: 200,
    count: 1,
    results: [hackerData[argued_id]]
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`API Listening On Port ${port}`);
});
