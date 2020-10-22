module.exports = (req, res) => {
  console.log("request!")
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}