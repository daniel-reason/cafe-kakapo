var db = require ('./database/db')

module.exports = {
  menu:menu,
  addItem:addItem
}

function menu (req, res) {
  var data = db.getMenuItems()
  data.showItems = req.query.showItems
  res.render('menu', data)
}



//create variable that will store the orders array [name, price, quantity]
var orderedItems = [ [""] ]

//create click event for menu items that runs addItem function

function addItem(itemName, itemPrice){
  if (orderedItems[0] == ""){
    orderedItems[0] = ([itemName,itemPrice])
  }
  return orderedItems
}



//on click of menu items
  //loop through order items array
    //if menu item name exists in the array
      // item quantity +1
    //else add item to the menu array
  //once the loop has finished update subtotal

  //create subtotal variable
  //create subtotal function
    //loop through menu array and get price
      //subtotal += price x quantity
