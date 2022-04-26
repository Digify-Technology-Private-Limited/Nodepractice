const express =require('express');
const router =express.Router();
const test=require('../models/test');
router.post('/request/insert',function(req,res){
 
    const problemtype=req.body.problemtype;
    const vechbrand=req.body.vechbrand;
      
      const rdata= new test({problemtype:problemtype, vechbrand:vechbrand});
      rdata.save() .then(function(result){
          res.status(201).json({success: true,request:result})
      })
      .catch(function(err1){
          res.status(500).json({success: false})
      })  
  })
  module.exports=router;