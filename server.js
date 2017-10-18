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

/*
app.listen('port', (process.env.PORT || 8080));
app.use(express.static('public'));
app.use(bodyParser.json());
*/

app.listen('port', (process.env.PORT || 8080)) {
  console.log('Lytter til port 32463!')
})

//app.use(express.static('public'))

