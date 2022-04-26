const mongoose =require('mongoose');
const test =mongoose.model("test",{
    problemtype:{
        type:String
    },
    vechbrand:{
        type:String
    }
})
module.exports=test;