module.exports = (req, res) => {
  res.statusCode = 301
  res.setHeader('Location', 'https://api.khulnasoft.com/slack')

  res.end()
}
