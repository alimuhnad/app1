var express = require('express')
const jwt = require('jsonwebtoken')
var router = express.Router()
//اعدادات المنكوديبي و api كله
var mongoose = require('mongoose');
const User=require('../models/users')
const Addcomments=require('../models/addcomments')
const Addask=require('../models/addask')
var Filter = require('bad-words')
filter = new Filter();


mongoose.connect('mongodb://a:momo.2005@ds261521.mlab.com:61521/app1');
const app = express()

router.post('/addcomments', function(req, res) {   
  Addcomments.create({
    askid:req.body.askid,
    commentbody:req.body.commentbody,
    data:req.body.data,
    usernameofthecomment:req.body.usernameofthecomment,
    emailofthecomment:req.body.emailofthecomment,
    active:req.body.active,
  }, function(err, review) {
      if (err)
          res.send(err);
     
  });

});


  router.post('/addask', function(req, res) {   
    Addask.create({
        askbody:req.body.askbody,
        username:req.body.username,
        email:req.body.email,
        createdtime:req.body.createdtime,
        viewsconts:req.body.viewsconts,
        numberofcomments:req.body.numberofcomments
    }, function(err, review) {
        if (err)
            res.send(err);
            Zonez.find(function(err, review) {
            if (err)
                res.send(err)
            res.json(review);
        });
    });

  });


  router.get('/getasks', function(req, res) {
    Addasks.find({},function(err, review) {
        if (err)
            res.send(err)
        res.json(review);
    });
 });

router.post('/getcomments', function(req, res) {

  Addcomments.find({askid:req.body.id}, null,{sort: {data: -1}},function(err, review) {
          if (err)
              res.send(err)
          res.json(review);
      });
});







   router.post('/reg',(req,res)=>{
//     let payload={subject : reg._id}
//     let token =jwt.sign(payload,'secritkey')
     let userDate =req.body;
     let user = new User(userDate)
     user.save((err,reg)=>{
  //     let payload={subject : reg._id}
  //     let token =jwt.sign(payload,'secritkey')
       res.status(200).send('ok')
     })
   })

   router.post('/login',(req,res)=>{
     let userDate=req.body;
     User.findOne({email:userDate.email},(err,User)=>{
       if(err){
         console.log(err);
       }else{
         if(!User){
           res.status(401).send('invalid')
         }else{
           if(User.password !== userDate.password){
             res.status(401).send('invalid')
           }else{
            //  let payload={subject : User._id}
            //  let token =jwt.sign(payload,'secritkey')
             res.status(200).send('ok')
           }
         }
       }
     })
   })



  module.exports = router;