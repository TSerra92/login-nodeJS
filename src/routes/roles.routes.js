const rolesController = require('../controllers/roles.controllers')
const jwtMiddleware = require("../middlewares/jwt.middlewares")

class RolesRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post("/roles/register", jwtMiddleware.checkToken, rolesController.registerRole),
        this.routes.get("/roles/list", jwtMiddleware.checkToken, rolesController.listRoles),
        this.routes.put("/roles/edit", jwtMiddleware.checkToken, rolesController.editRole),
        this.routes.delete("/roles/delete", jwtMiddleware.checkToken, rolesController.deleteRole),
        this.routes.post("/roles/permissions", jwtMiddleware.checkToken, rolesController.registerRolesPermissions)
    }
}

module.exports = RolesRoutes