var mongoose = require('mongoose');
var Ricette =require('./ricette.model.js')


module.exports = function(){
    
    var getRicette = function(req,res){
        Ricette.find()
                .exec()
                .then(function(data){
                    res.status(200).json(data);
                })
                .catch(function(err){
                    res.status(500).send(err);

                });
        res.send("le ricette del mondo");
    }
      var dettaglioRicetta = function(req,res){
        var id = res,params,id;
        Ricette.findById(id)
                .exec()
                .then(function(data){
                    res.status(200).json(data);
                })
                .catch(function(err){
                    res.status(500).sens(err);
                });  
    }
      
      var creaRicetta = function(req,res){
          var nuovaRicetta = new Ricette(req.body);
          nuovaRicetta.save()
                      .then(function(data){
                          console.log("success");
                          res.status(200).json(data);
                    }).catch(function(err){
                        console.log("error");
                        res.status(500).json(err);
                    })
          
    }
    

    return{
        getRicette:getRicette,
        dettaglioRicetta:dettaglioRicetta,
        creaRicetta:creaRicetta
        
    }
}();//queste due parentesi sono  una funzione che si lancia da sola e ritorna un oggetto 