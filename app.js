const express=require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
// const items = require('./routes/api/Items')
const config=require('config')
const path=require('path')

const app=express()



app.get('/',(req,res)=>{
    res.send('kaisan baa')
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



//DB config

const db = config.get('MONGOURI');

//connect to mongodb

     mongoose.connect(db)
       .then(()=>console.log('Mongodb connected...'))
       .catch((err)=>console.log(err))



//set up routes

app.use('/api/items',require('./routes/api/Items'))
app.use('/api/users',require('./routes/api/User'))
app.use('/api/auth',require('./routes/api/Auth'))



if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
         
    })
}

const port=process.env.PORT || 5000



app.listen(port,()=>{
    console.log('server is running at port 5000')
})