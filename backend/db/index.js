require ('dotenv').config()
const cors=require('cors')
const mongoose = require('mongoose')


const app =express()

const dbConnect = (app) => {
    mongoose
    .connect(`mongodb+srv://k0106:${TRANZAS0417.}@cluster0.leduedb.mongodb.net/test`)
        .then((result)=>{
            const PORT = process.env.PORT
            app.listen(PORT,()=> {
            console.log('Servidor escuchando en puerto ${PORT}`)
                    })       
            console.log('Conexion Exitosa a Mongo DB')
        })
        .catch((err)=>console.log(err))      

const productSchemamongose.Schema(
    {    
        name:{type:String,require:true},
        price:Number,
    }),

module ,exports = ({dbConnect})
}
