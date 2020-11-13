const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

//Item models

const Item = require('../../models/Item')



router.get('/',(req,res)=>{
    Item.find({})
    .then((items)=>{
        return res.json(items)
    })
})


router.post('/', auth ,(req,res)=>{

    const {name} = req.body;

    const newItem = new Item({
        name:name
    })
    .save()
    
    .then((item)=>{
        return res.json(item)
    })
    .catch((err)=>{
        console.log(err)
    })

})




router.delete('/:id',auth,(req,res)=>{

     Item.findById(req.params.id)
     .then((item)=>{
         return item.remove()
     })
     .then(()=>{
         return res.json({success:true})
     })
     .catch((err)=>{
         res.status(404).json({success:false})
     })

})



module.exports= router;