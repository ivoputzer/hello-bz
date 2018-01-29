const {parse} = require('url')

exports.requestListener = (req, res) => {
  if (/^\/ping/i.test(req.url)) {
    res.end(`pong`)
    return
  }
  if (/^\/hello$/i.test(req.url)) {
    res.end(`Hello Stranger!`)
    return
  }
  const {query} = parse(req.url, true)
  if (query.name) {
    res.end(`Hello ${query.name}!`)
    return
  }
}
