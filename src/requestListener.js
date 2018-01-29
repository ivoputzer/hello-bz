const {parse} = require('url')

exports.requestListener = (req, res) => {
  if (/^\/ping/i.test(req.url)) {
    return res.end(`pong`)
  }
  if (/^\/hello$/i.test(req.url)) {
    return res.end(`Hello Stranger!`)
  }
  const {query} = parse(req.url, true)
  if (query.name) {
    return res.end(`Hello ${query.name}!`)
  }
}
