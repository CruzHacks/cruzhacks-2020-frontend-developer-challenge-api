const validateAPIKey = (req, res, next) => {
  console.log(req.query);
  // console.log(req.headersapiKey);

  const apiKey = process.env.APIKEY || "DEV_KEY";

  console.log(req.query.authorization);
  console.log(apiKey);
  console.log(req.query.authorization === apiKey);

  if (req.query.authorization != apiKey) {
    res.status(401);
    res.json({
      code: 401,
      error: true,
      message: "Unauthorized Request: Inalid or missing API key."
    });
  }

  next();
};

module.exports = { validateAPIKey };
