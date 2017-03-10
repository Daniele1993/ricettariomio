var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ricettaSchema = new Schema({
    titolo:{
        type: String,
        required:[true,"devi inserire un titolo"]
    },
    immagini:{
        type:String,
        required:[true,"devi inserire un immagine"]
    },
    
    categoria:{
        type: String,
        enum:[true,"antipasto","primo","secondo","contorni","dolci"],
        required: [true,"devi inserire una categoria"]
    },
    ingredienti:{
        type:String,
        required:[true,"devi inserire un ingrediente"]
    },

    difficolta:{
        type: String,
        required:[true,"devi inserire una difficolta"]
    },
    gradicottura:{
        type:Number,
        required:[true,"inserisci temperatura di cottura"],
        min:[5,""],
        max:[true,""]
    },
    preparazione:{
        type:String,
        required:[true,"inserisci la modalita di preaparazione"]
    },
    tempodicottura:{
        type:String,
        required:[true,"devi inserire un tempo"]
    },
    temperaturadicottura:{
        type:String,
        required:[true,"devi inserire la temperatura di cottura"],
        min:[5,"troppo poco caldo"],
        max:[250,"si brucia"]
    },
    voto:{
        type:Number,
        min:[1,"poco"],
        max:[5,"troppo"]
    },
    
commenti:[{
    autore:{
        type:Schema.Types.ObjectId,
        ref:"Utenti"
    },
    commento:{
        type:String,
        required:true
    }
}],

});
var Ricetta = mongoose.model('Ricetta',ricettaSchema);
module.exports = Ricetta;