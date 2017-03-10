var moongose =require('mongoose');
moongose.connect('mongodb://admin:admin@ds031982.mlab.com:31982/ricettario',function(err){
    if(!err){
        console.log("database connesso")
    }else{
        console.log("err");
    }
});