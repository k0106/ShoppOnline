const express =require('express')

const app =express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Tienda Online Ecommerce LoreleyN</h1>')
})

const PORT=process.env.PORT||4000

app.listen(4000,() =>{
    console.log('Servidor escuchando en puerto 4000')
})    