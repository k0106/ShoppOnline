require('dotenv').config()
const express = require('express')
const dbConnect =require('./db')
require('dotenv').config()
const express=require('express')
const dbConnect=require('./db')
const cors=require('cors')
const productRouter=require('./routers/product')

const app= express()

dbConnect(app)

app.use(cors({origin:true}))

app.use(express.json())

app.use('/api/v1/products',(req,res)=>{

app.post('/api/v1/products',)
