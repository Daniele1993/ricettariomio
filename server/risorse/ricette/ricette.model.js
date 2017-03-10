var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ricettaSchema = new Schema({
    titolo:{
        type: String,
        required:[true,"devi inserire un titolo"]
    },
    immagini:[{
        type:String,
        required:[true,"devi inserire un immagine"]
    }],
    
    categoria:{
        type: String,
        enum:[true,"antipasto","primo","secondo","contorni","dolci"],
        required: [true,"devi inserire una categoria"]
    },
    ingredienti:[{
        type:String,
        required:[true,"devi inserire un ingrediente"]
    }],

    difficolta:{
        type: String,
        enum:["facile","medio","difficile"],
        required:[true,"devi inserire una difficolta"]
    },

    preparazione:{
        type:String,
        required:[true,"inserisci la modalita di preaparazione"]
    },
    tempodicottura:{
        type:Number,
        required:[true,"devi inserire un tempo"],
        min:[5,"troppo poco"],
        max:[180,"troppo"]
    },
    temperaturadicottura:{
        type:String,
        required:[true,"devi inserire la temperatura di cottura"],
        min:[5,"troppo poco caldo"],
        max:[250,"si brucia"]
    },
    voto:{
        numerivoti:{
            type:Number,
        },
        sommavoti:{
        type:Number,
      
        }
    },
    
commenti:[{
    autore:{
        type:Schema.Types.ObjectId,
        ref:"Utenti"
    },
    commento: String,
}],

});
var Ricetta = mongoose.model('Ricetta',ricettaSchema);
module.exports = Ricetta;