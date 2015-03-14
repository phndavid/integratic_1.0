var express = require('express');
var app  = express();
var port     = process.env.PORT || 8090;

//Configurate
app.use(express.static(__dirname+'/public'));


// Routes
//require('./routes/routes.js')(app);

app.listen(port);

console.log('The App runs on port ' + port);