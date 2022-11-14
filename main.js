const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const routes = require("./src/routes/index.routes")
const conn = require("./src/database/conn")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
require('dotenv').config()

const port = process.env.PORT


const app = express()



app.use(express.json())
app.use(cors({
    credentials: true
}))
app.use(helmet())

conn.sync().then(() => {
    console.log("==============DATABASE - SUCCESSFUL CONNECTION==============")
    app.listen(port, () => console.log(`APPLICATION RUNNING ON PORT ${port}`))
    app.use(routes)

}).catch((err) => {
    console.log("==============DATABASE - ERROR CONNECTION==============")
    console.log(`Error: ${err}`)
})

