var express = require('express')
var path = require('path')
var brain = require('brain.js')

var app = express()
app.use('/images', express.static(__dirname + '/src/images'));
app.use('/res', express.static(__dirname + '/node_modules'));
var net = new brain.NeuralNetwork()

var port = 8080

app.get('/', function(req, res) {

	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/:data', function (req, res) {
  	res.send(req.params.data)
})

app.listen(port, function () {
  	console.log("server running on : http://localhost:" + port)
})