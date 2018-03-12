// dependencies
const express = require('express');
const app = express();


app.get('/', function( req, res){
    res.render(__dirname+'/views/index.pug', {title: 'Hey', message: 'Hello there!'});
});

app.listen(3000);
console.log('Listening port 3000....');

