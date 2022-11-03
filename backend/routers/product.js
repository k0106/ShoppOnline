const router =require('express').Router()
const { Router } = require('express')
const { models } = require('mongoose')
const Product = require('./'models/Product')

router.post('/',(req,res)=>{
    if(!req.body.name) {
        res.status(4000).json({
            ok:false,
            message: 'El campo nombre del producto es obligatorio',
})           


router.get('/',async(req,res)=>{
    const products =await Product.find()

    res.status(200).json({ok:true,data:products.length})

})
module.exports =router