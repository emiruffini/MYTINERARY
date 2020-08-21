const express = require('express')
require('dotenv').config()

const cors = require('cors')
require ("./config/database")

const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/routesCities')),



app.listen(process.env.PORT, ( ) => console.log("Listening on PORT "  + process.env.PORT))