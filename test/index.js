const {ok, equal} = require('assert')
const {requestListener} = require('../src/requestListener')

test('src/requestListener', () => {
  test('responds with `pong` on ping', done => {
    requestListener({url: '/ping'}, {
      end (res) {
        equal(res, 'pong')
        done()
      }
    })
  })
  test('responds with `Hello Stranger!` for unknown names', done => {
    requestListener({url: '/hello'}, {
      end (res) {
        equal(res, 'Hello Stranger!')
        done()
      }
    })
  })
  test('responds with `Hello {name}!` for name within query', done => {
    requestListener({url: '/hello?name=foo'}, {
      end (res) {
        equal(res, 'Hello foo!')
        done()
      }
    })
  })
})
