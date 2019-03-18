console.log('hi!');


var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(req);
});

app.post('/', function (req, res) {
  res.send('Hello World from post!');
//  console.log(req.body);
  console.log(req.body.latitude)
  console.log(req.body.longitude)
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

