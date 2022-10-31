const mongoose = require('mongoose')

const dbConnect = (app) => {
    mongoose
    .connect(
        `mongodb+srv://k0106:${process.env.MONGO_DB_PASS}@cluster0.leduedb.mongodb.net/test`
        )
        .then((result)=>{
            const PORT = process.env.PORT
            console.log(result)
            app.listen(PORT,()=> {
                console.log('Servidor escuchando en puerto ${PORT}`)
            })       
            console.log('Conexion Exitosa a Mongo DB')
        })
        .catch((err)=>console.log(err))      

const productSchema=mongose.Schema(
    {
        name:{type:String,require:true},
        price:Number,

    },
)
module.exports = ({dbConnect})
}
