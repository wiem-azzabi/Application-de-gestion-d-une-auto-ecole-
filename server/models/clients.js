const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true,
      },
      password:{
        type:String,
        required:true,
    },
      firstname:{
        type:String,
        required:true,
      },
      birth:{
        type:String,
        required:true,   
      },
      adress:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
      },
      number:{
        type:String,
        required:true, 
      },
      payee:{
        type:Boolean,
        default:true
      },
      photo:{
          type:String,
          default:'',
      }
      
    })
    mongoose.model("User",userSchema)