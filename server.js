const express = require('express')
const app = express()


//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

app.use(express.static(__dirname + '/public'));

function randomGreeting(){
    
    var Array = ["hei", "hallo", "hola"];

    toBeShown = Array[Math.floor(Math.random() * 3) ];

    return toBeShown;
}

app.get('/hehe/:navn', function (req, res) {
  res.send(randomGreeting() + " " + req.params.navn)
})

app.listen(32463, function () {
  console.log('Lytter til port port 32463!')
})

//app.use(express.static('public'))





/*
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
//app.use(express.static('./public'))

app.get('/:id', function (req, res) {
  res.send('Hello ' + req.params.id)
})

app.listen(8080, function() {
  console.log('localhost:8080')
})*/