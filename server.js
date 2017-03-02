var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var tape = require('tape')
var routes = require('./routes')
var fs = require('fs')

var app = express()
module.exports = app

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
  }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Routes
app.get('/menu', routes.menu)

app.get('/mainMenu', function(req, res){
  res.sendFile('views/layouts/main.hbs')
})


// app.get('/form', function(req, res) {
//   res.send("<form action='/form' method='post'> <input type='text' placeholder='Please place your order here' /> <input type = 'submit' value = 'Click here'/></form> ")
// })
