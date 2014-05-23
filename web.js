var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;
app.listen(port);
app.use(express.static(__dirname + '/public'));
console.log('App running on port ' + port);