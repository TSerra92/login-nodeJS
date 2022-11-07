const permissionsController = require("../controllers/permissions.controllers")

class PermissionRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post("/permissions/register", permissionsController.registerPermission),
        this.routes.get("/permissions/list", permissionsController.listPermissions)
    }
}

module.exports = PermissionRoutes