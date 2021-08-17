const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const admin = mongoose.model("admin")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET}= require('../Keys')




router.post('/signinAdmin',(req,res) => {
    const {email,password} = req.body
    if(!email || !password){
      return  res.status(422).json({error:"please add all the fields"})
    }
    
    admin.findOne({email:email}) 
    .then(Savedadmin=>{
        if(!Savedadmin){
         return res.status(422).json({error:"unvalid email or password"})
        }
       bcrypt.compare(password, Savedadmin.password)
       .then(doMatch=>{
           if(doMatch){
               //res.json({message:"successfuly signed in"})
              const token = jwt.sign({_id:Savedadmin._id},JWT_SECRET)
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