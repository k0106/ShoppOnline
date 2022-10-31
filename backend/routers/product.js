const express=require('express')
const routers=require('express').Router()

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
        res.status(201).json({ok-.true})
    })
    .catch((err))=>console.log.apply((err))