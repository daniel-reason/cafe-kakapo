var test = require('tape')
var routes = require('../routes.js')

test('test setup working', function (t) {
  t.pass()
  t.end()
})

test('test say hi', function (t) {
  var message = "hi"
  var expected = "hi"
  var actual = routes.sayhi(message)
  t.equal(actual, expected)
  t.end()
})
