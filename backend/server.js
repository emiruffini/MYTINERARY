const express = require('express')
require('dotenv').config()

const cors = require('cors')
require ("./config/database")

const app = express()
const router = require('./routes/routes')

app.use(cors())
app.use(express.json())
app.use('/api', router)



app.listen(process.env.PORT, ( ) => console.log("Listening on PORT "  + process.env.PORT))