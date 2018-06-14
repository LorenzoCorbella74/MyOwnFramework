var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan')

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
    console.log("Magic happens now at port 3000!");
});