const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerConfig = require("../swagger/config.swagger")



class SwaggerRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){

        
        const swaggerDocs = swaggerJSDoc(swaggerConfig)
        this.routes.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

        // this.routes.get('/api-doc-json', (req, res) => {
        //     res.json(swaggerDocs).status(200)
        // })


    }
}

module.exports = SwaggerRoutes