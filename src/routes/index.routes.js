const express = require("express")
const routes = express.Router()
const UsersRoutes = require("./users.routes")
const RolesRoutes = require("./roles.routes")
const PermissionRoutes = require("./permissions.routes")
const SwaggerRoutes = require("./swagger.routes")


new UsersRoutes(routes).init()
new RolesRoutes(routes).init()
new PermissionRoutes(routes).init()
new SwaggerRoutes(routes).init()

module.exports = routes