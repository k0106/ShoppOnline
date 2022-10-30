require('dotenv').config()

const express =require('express')

const app =express()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

app.get('/', (req, res) => {
    res.status(200).send('<h1>Tienda Online Ecommerce LoreleyN</h1>')
})

const PORT=process.env.PORT||4000

app.listen(PORT,() =>{
    console.log('Servidor escuchando en puerto ${PORT}')

})    