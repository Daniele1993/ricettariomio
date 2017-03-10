module.exports = function(app,xpress,path){

        //ROTTA PER GLI UTENTI 
        app.use('/utenti',require("./../risorse/utenti"));



        //ROTTA PER LE RICETTE
        app.use('/ricette',require("./../risorse/ricette"));


};