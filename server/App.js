const express = require('express')
const morgan = require('morgan')
const fileupload = require('express-fileupload')


const mongoose =require('mongoose')
var cors = require('cors')
const app = express();
app.use(fileupload({useTempFiles: true}))
app.use(morgan('tiny'))
const port = process.env.PORT || 3000 ;
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,useUnifiedTopology:true
})
mongoose.connection.on('connected',(err)=>{
    console.log('connected to mongo',err)
})
mongoose.connection.on('error',()=>{
    console.log('error connecting')
})
/* require('./models/user')
require('./models/post') */

app.use(express.json())
// app.use(require('./routes/auth'))
// app.use(require('./routes/post'))

app.listen(port,()=>{
    console.log('server is running on',port)
})