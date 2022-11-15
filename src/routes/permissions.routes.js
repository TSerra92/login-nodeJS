const permissionsController = require("../controllers/permissions.controllers")
const jwtMiddleware = require("../middlewares/jwt.middlewares")

class PermissionRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post("/permissions/register", jwtMiddleware.checkToken, permissionsController.registerPermission),
        this.routes.get("/permissions/list", jwtMiddleware.checkToken, permissionsController.listPermissions),
        this.routes.put("/permissions/edit", jwtMiddleware.checkToken, permissionsController.editPermission),
        this.routes.delete("/permissions/delete", jwtMiddleware.checkToken, permissionsController.deletePermission)
    }
}

module.exports = PermissionRoutes