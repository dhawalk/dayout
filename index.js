var path = require('path');
var express = require('express');
var routes = require('./routes/routes');
require("node-jsx").install();  

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('public'));

var routes = require('./routes/routes');

app.use('/', routes);


app.listen(8888);

