// var fs = require('fs')
//
// module.exports = {
//   menu:menu,
//   addItem:addItem
// }

function menu (req, res) {
  var data = db.getMenuItems()
  data.showItems = req.query.showItems
  res.render('menu', data)
}



// var database = __dirname+'/database/orders.js'
var menuItem = document.getElementsByClassName('menuItem')
var itemName = ''
var itemPrice = ''

//add click event
for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', getItemDetails);
  }

//get item details on click
function getItemDetails(){
  itemName = this.getAttribute('data-item')
  itemPrice = this.getAttribute('data-price')
  addItem(itemName, itemPrice)
}



//create variable that will store the orders array [name, price, quantity]
var orderedItems = [ [ "sandwidge", 3.50, 1] ]

// read the orders file and assigns data to orderedItems
function readFile(){
  fs.readFile(database, function(err,data){
    if (err) throw err
    orderedItems = data.toString()
  })
}

//create click event for menu items that runs addItem function



function addItem(itemName, itemPrice){
  if (orderedItems[0] == ""){
    orderedItems[0] = ([itemName,itemPrice])
  }else{
    for (var i = 0; i < orderedItems.length; i ++){
      if(orderedItems[i][0] == itemName){
        orderedItems[i][2]++
      }else{
        orderedItems.push([itemName,itemPrice,1])
      }
    }
  }
  // Write back to orders file.
  // fs.writeFile(file,data,callback)
  console.log(orderedItems);
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
