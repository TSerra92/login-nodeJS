require('dotenv').config()
const { userPaths } = require('./users.swagger')
const { errorsSchemas, userModel } = require('./schemas.swagger')

module.exports = {
    "definition": {
        "openapi": "3.0.0",
        "info": {
            "title":"api-login",
            "description": "API Login com Sequelize+JWT+BCrypt",
            "contact": {
                "email":"thgserra@gmail.com"
            },
            "version":"1.0.0"
        },
        "servers": [
                {
                    "url": `http://localhost:${process.env.PORT}/`,
                    "description":"API - Local"
                }
        ],
        "externalDoc": {
            "description": "Leia mais sobre a api-login",
            "url": "https://github.com/"
        },
        "paths": {
            ...userPaths
        },
        "components": {
            "schemas": {
                ...errorsSchemas,
                ...userModel
            },
            "securitySchemes": {
                "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormate": "JWT"
                }
            }
        }
    },
    "apis":  ["./src/routes/*.js"]
}