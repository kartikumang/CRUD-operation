var express = require('express');
var router = express.Router();
var userModel = require('./users');

router.get('/',function(req,res){
  res.render('index');
});
router.post('/labra',function(req,res){
    userModel.create({
      name:req.body.username,
      email:req.body.email
    }).then(function(createValue){
      res.send(createValue);
    })
}); 

router.get('/readdata',function(req,res){
  userModel.find()
  .then(function(founddata){
    res.send(founddata)
  })
})
router.get('/readdata/:username',function(req,res){
  userModel.findOne({name:req.params.username})
  .then(function(founddata){
    res.send(founddata)
  })
})

router.get('/update/:personusername/:newusername',function(req,res){
   userModel.findOneAndUpdate({name:req.params.personusername},{name:req.params.newusername},{new:true})
   .then(function(updateuser){
     res.send(updateuser);
   })
})

router.get('/delete/:username',function(req,res){
  userModel.findOneAndDelete({name:req.params.username})
  .then(function(deleteuser){
    res.send(deleteuser)
  })
})
module.exports = router;
