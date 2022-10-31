require('dotenv').config()
const express = require('express')
const dbConnect =require('./db')
require('dotenv').config()
const express=require('express')
const dbConnect=require('./db')
const cors=require('cors')
const Product = require('./models/product')

const app= express()

dbConnect(app)

app.use(cors({origin:true}))

app.use(express.json())

app.post('/api/v1/products',(req,res)=>{
    if(!req.body.name) {
        res.status(400).json({
            ok:false,
            message: 'El campo nombre del producto es obligatorio',
            })
            return
    }
    const newProduct= new Product(req.body)

    newProduct
    .save()    
    .then((result)=>{
        res.status(201).json({ok:true})
    })
    .catch((err)=>console.log(err))

    
})


console.log({dbConnect})

const cors=require('cors')

app.use(express.json())

app.post('/api/v1/products',(req, res) => {
    //console.log('Peticion Recibida')
    //console.log({body:req.body})
    
    
/*     const newProduct= new Product({
        name:req.body.name,
        price:req.body.price,
    })   esto es igual a la linea de abajo
 */
    
app.use(express.static(path.join(__dirname,'public')))
const PORT =process.env.PORT
//app.get('/',(    req , res ,next  )=>{
    //console.log('Peticion Recibida')
    //res.send('<h1>Hola Mundo!°!</h1>')
    //res.status(200).sendFile('ind ex.html',{root: __dirname})
    //next()  //next es fundamental si tuvieramos mas de 1 midlewhere
//
})