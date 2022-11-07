const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const routes = require("./src/routes/index.routes")
const conn = require("./src/database/conn")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
require('dotenv').config()

const port = process.env.PORT


const swaggerConfig = {
    definition: {
        openapi: '3.0.0',
        info: {
            title:"api-login",
            description: "API Login com Sequelize+JWT+BCrypt",
            contact: {
                email:"thgserra@gmail.com"
            },
            version:"1.0.0"
        },
        servers: [
                {
                    url: `http://localhost:${port}/`,
                    description:"API - Local"
                },
        ],
        externalDoc: {
            description: 'Leia mais sobre a api-login',
            url: 'https://github.com/'
        },
    },
    apis:  ['./src/routes/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerConfig)

const app = express()



app.use(express.json())
app.use(cors({
    credentials: true
}))
app.use(helmet())

app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.get("/api-doc-json", ()=> {
    res.json(swaggerDocs).status(200)
})

conn.sync().then(() => {
    console.log("==============DATABASE - SUCCESSFUL CONNECTION==============")
    app.listen(port, () => console.log(`APPLICATION RUNNING ON PORT ${port}`))
    app.use(routes)

}).catch((err) => {
    console.log("==============DATABASE - ERROR CONNECTION==============")
    console.log(`Error: ${err}`)
})

