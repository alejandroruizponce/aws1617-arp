var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

var path = require('path');

var port = (process.env.PORT || 3000);

var baseAPI = "/api/v1";

var contacts = [{
    name: "pepe",
    phone: "12345",
    email: "pepe@pepe.com"
}, {
    name: "luis",
    phone: "67890",
    email: "luis@luis.com"
}];



app.get(baseAPI+"/contacts/:name", (request, response) => {
    
    var name = request.params.name;
    
    var contact = contacts.filter((contact) => {
        return (contact.name == name);
    })[0];

    
    response.send(contacts);
    console.log("GET /contacts");
});

app.delete(baseAPI+"/contacts", (request, response) => {
    
    var contact = request.body;
    contacts = [];
    
    response.sendStatus(200);
    
    console.log("DELETE /contacts");
});



app.put(baseAPI+"/contacts/:name", (request, response) => {
    var name = request.params.name;
    var updatedContact = request.body;
    
    contacts = contacts.map((contact) => {
        if(contact.name == name)
            return updatedContact;
        else
            return contact;
    })
})


app.listen(port, () => {
    console.log("Server up and running!!");
});
