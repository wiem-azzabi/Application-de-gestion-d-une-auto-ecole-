const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET}= require('../Keys')

router.post('/login',(req,res)=>{
    const {name,firstname,birth,adress,email,number,password} = req.body;
    if(!email || !name || !firstname || !birth || !adress || !number || !password){
      return  res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email}) 
    .then((SavedUser)=>{
        if(SavedUser){
         return res.status(422).json({error:"user already exists withthat email"})
        }  
        bcrypt.hash(password,12)
        .then(hashedpassword=>{ 
            const user = new User({
                name,
                firstname,
                adress,
                birth,
                email,
                number,
                password:hashedpassword,
            })
       user.save()
        .then(user=>{
            res.json({message:"saved successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
    })   
    })   
    .catch(err=>{
        console.log(err)
})
})

router.post('/signin',(req,res) => {
    const {email,password} = req.body
    if(!email || !password){
      return  res.status(422).json({error:"please add all the fields"})
    }
    
    User.findOne({email:email}) 
    .then(SavedUser=>{
        if(!SavedUser){
         return res.status(422).json({error:"unvalid email or password"})
        }
       bcrypt.compare(password, SavedUser.password)
       .then(doMatch=>{
           if(doMatch){
               //res.json({message:"successfuly signed in"})
              const token = jwt.sign({_id:SavedUser._id},JWT_SECRET)
               res.json({token:token})
            }
           else{
               return res.status(422).json({error:"invalid email or password"})
           }
       })
       .catch(err=>{
           console.log(err)
       })
    })
})

module.exports = router
