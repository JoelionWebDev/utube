const notFound = (req, res) =>
  res.status(400).send({ shakeAndBake: "Route not found" });

module.exports = notFound;
