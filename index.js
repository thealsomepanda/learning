// dependencies
const express = require('express');
const app = express();


app.get('/', function( req, res){
    res.sendFile(__dirname+'/views/home.html');
});

app.listen(3000);
console.log('Listening port 3000....');

