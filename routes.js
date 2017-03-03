var db = require ('./database/db')

module.exports = {
  menu:menu,
  orderConfirm: orderConfirm
}

function menu (req, res) {
  res.render('menu')
}

function orderConfirm (req, res) {
  res.render('orderConfirm')
  // res.redirect('/')
}
