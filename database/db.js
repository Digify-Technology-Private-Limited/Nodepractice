const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Digify'); 

mongoose.connection.once('open',function(){
    console.log("Connection has been made");
}).on('error',function(error){
    console.log("error is",error);
})
