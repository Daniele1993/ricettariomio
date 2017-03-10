var express = require('express');
var app = express();
var path = require('path');

const PORT = 3000;



//IMPORTO IL FILE DI CONFIGURAZIONE PER IL DB
require("./config/database.js");


//
require("./routers/routers.js")(app,express,path);

//START DEL SERVER
app.listen(PORT, function(){
    console.log("listening on http://localhost:" + PORT);
});
