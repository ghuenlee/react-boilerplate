var express = require('express');
var server = express();

server.use(express.static('public'));

server.listen(5000, function () {
    console.log('Server Started on port 5000');
});