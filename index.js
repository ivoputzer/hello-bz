const {createServer} = require('http')
const {requestListener} = require('./src/requestListener')

createServer(requestListener)
  .listen(process.env.npm_package_config_server_port)
