const validateAPIKey = (req, res, next) => {
  console.log(req.headers);
  console.log(req.headersapiKey);

  const apiKey = process.env.APIKEY || "clipper";

  if (req.headersapiKey !== apiKey) {
    res.code = 401;
    res.json({
      code: 401,
      error: true,
      message: "Unauthorized Request: Inalid or missing API key."
    });
  }

  next();
};

module.exports = { validateAPIKey };
