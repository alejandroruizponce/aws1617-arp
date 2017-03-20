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



app.get(baseAPI+"/contacts/", (request, response) => {
    
    
    db.find({},(err, contacts) => {
        response.send(contacts);
    });
    
    console.log("GET /contacts");
});

app.post(baseAPI+"/contacts/", (request, response) => {
    
    var contact = request.body;
    
    db.insert(contact);
    response.sendStatus(201);
    
    console.log("POST /contacts");
});



app.listen(port, () => {
    console.log("Server up and running!!");
});
