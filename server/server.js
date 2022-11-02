let express = require("express")
let cors = require("cors")
require("dtoenv").config()
let path = require("path")

let app = express()

app.use(express.json())
app.use(cors())

let { PORT } = process.env

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))