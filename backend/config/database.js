const mongoose = require ('mongoose')
//Conexión a la base de datos
mongoose.connect( process.env.MONGODB_URI ,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const conexion = mongoose.connection
conexion.once('open', () => console.log("conected to data base"))