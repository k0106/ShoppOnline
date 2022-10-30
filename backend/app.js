const express =require('express')

const app =express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Tienda Online Ecommerce Loreley</h1>')
})

app.listen(4000,() =>{
    console.log('Servidor escuchando en puerto 4000')
})    