const express=require('express')
const { models } = require('mongoose')
const routers=express.Router()
const Product = require('./'models/Product')

routers.post('/',(req,res)=>{
    if(!req.body.name) {
        res.status(400).json({
            ok:false,
            message: 'El campo nombre del producto es obligatorio',
        })
        return  
    }
    const newProduct =new Product(req.body)
    
    newProduct
    .save()
    .then((result)=>{
        res.status(201).json({ok:true})
    })
    .catch((err))=>{
    console.log.apply((err))
    }

routers.get('/',(req,res)=>{

})
module.exports =routers