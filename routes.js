var db = require ('./database/db')

module.exports = {
  menu:menu
}

function menu (req, res) {
  var data = db.getMenuItems()
  data.showItems = req.query.showItems
  res.render('menu', data)
}
