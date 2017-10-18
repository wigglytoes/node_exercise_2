var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080));


app.use(express.static(__dirname + '/public'));

function randomGreeting(){
    
    var Array = ["hei", "hallo", "hola"];

    toBeShown = Array[Math.floor(Math.random() * 3) ];

    return toBeShown;
}



/*
app.get('/hehe/:navn', function (req, res) {
  res.send(randomGreeting() + " " + req.params.navn)
})*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});