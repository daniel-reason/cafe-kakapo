var db = require ('./database/db')

module.exports = {
  menu:menu
}

function menu (req, res) {
  var data = db.getMenuItems()
  data.showItems = req.query.showItems
  res.render('menu', data)
}

//create variable that will store the orders array [name, price, quantity]
//create click event for menu items
//on click of menu items
  //loop through menu array
    //if menu item name exists in the array
      // item quantity +1
    //else add item to the menu array
  //once the loop has finished update subtotal

  //create subtotal variable
  //create subtotal function
    //loop through menu array and get price
      //subtotal += price x quantity
