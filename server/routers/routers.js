var bodyParser = require('body-parser');


module.exports = function(app,xpress,path){

       
       //TRADUZIONE DEL BODY
       app.use(bodyParser.json());
       
        //ROTTA PER GLI UTENTI 
        app.use('/utenti',require("./../risorse/utenti"));


        //ROTTA PER LE RICETTE
        app.use('/ricette',require("./../risorse/ricette"));


};