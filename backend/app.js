const express =require('express')
const express =require('express')
require('dotenv').config()

const app= express

app.get('/', (req, res) => {
    console.log('Peticion recibida')

    res.status(200).send('<h1>Tienda Online Ecommerce LoreleyN</h1>')

})

const PORT= process.env.PORT|| 4000

app.listen(PORT,() =>{
    console.log('Servidor escuchando en puerto ${PORT}')

})    