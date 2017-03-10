module.exports = function(){
    
    var getRicette = function(req,res){
        res.send("le ricette del mondo");
    }
    

    return{
        getRicette:getRicette

    }
}();//queste due parentesi sono  una funzione che si lancia da sola e ritorna un oggetto 