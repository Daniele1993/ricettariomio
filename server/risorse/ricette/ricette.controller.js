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

    var cercaperCategoria = function(req,res){
        var categoria = req.query.categoria;
            Ricette.find({
                "categoria":categoria,
            }).exec()
              .then(function(data){
                  res.status(200).json(data);
              })
              .catch(function(err){
                  res.status(500).send(err);
              })
    }
    
        var ricercaperIngredienti = function(req,res){
            var ingredienti = req.query.ingredienti;
            Ricette.find({

                "categoria":categoria,
                
            }).exec()
                .then(function(data){
                    res.status(200).json(data);
                })
                .catch(function(err){
                    res.status(500).send(err);
                })
        }


    return{
        getRicette:getRicette,
        dettaglioRicetta:dettaglioRicetta,
        creaRicetta:creaRicetta,
        cercaperCategoria:cercaperCategoria,
        ricercaperIngredienti:ricercaperIngredienti
    }
}();//queste due parentesi sono  una funzione che si lancia da sola e ritorna un oggetto 