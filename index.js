const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');


//use bodyparser to parse the incoming request body
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.json({}));
app.use(bodyParser.raw({}));
app.use(bodyParser.text({}));

app.use('/',require('./routes'));


app.listen(PORT,function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log('Server running at PORT ',PORT);
})