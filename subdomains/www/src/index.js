module.exports = (req, res) => {
  res.statusCode = 301
  res.setHeader('Location', `https://khulnasoft.com/${req.url.substr(1)}`)

  res.end()
}
