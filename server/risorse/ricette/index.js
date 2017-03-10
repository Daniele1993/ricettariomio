var express =require ('express');
var router = express.Router();
var Ricette = require('./ricette.controller.js');

// ROTTA CHE MI RESTITUISCE LE RICETTE DEL MONDO 
router.get('/',Ricette.getRicette);

//ROTTA CHE MI RESTITUISCE UNA SOLA RICETTA
router.get('/:id([0-9a-f]{24})',Ricette.dettaglioRicetta);

//ROTTA PER CREARE LA RICETTA
router.post('/',Ricette.creaRicetta);

//ROTTA PER RICERCA PER CATEGORIA
router.get('/cerca',Ricette.cercaperCategoria);

//ROTTA PER RICERCA PER INGREDIENTI
router.get('/ricerca',Ricette.ricercaperIngredienti);

//ROTTA PER VOTO RICETTA
router.put('/:id([0-9a-f]{24})',Ricette.votoRicetta);


module.exports= router;
