var test = require('tape')
var routes = require('../routes.js')

test('test setup working', function (t) {
  t.pass()
  t.end()
})

test('test adding item', function (t) {
  var itemName = 'coffee'
  var itemPrice = 3.50

  var expected = [
    ['coffee', 3.50]
  ]
  var actual = routes.addItem(itemName, itemPrice)
  t.deepEquals(actual, expected)
  t.end()
})
