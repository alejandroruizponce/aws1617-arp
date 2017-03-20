var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

var path = require('path');
var dataStore = require('nedb');
var dbFileName = path.join(__dirname,'contacts.json');

var db = new dataStore({
    filename : dbFileName,
    autoload : true
});

var port = (process.env.PORT || 3000);

var baseAPI = "/api/v1";



app.listen(port, () => {
    console.log("Server up and running!!");
});
