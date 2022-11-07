const rolesController = require('../controllers/roles.controllers')


class RolesRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post("/roles/register", rolesController.registerRole),
        this.routes.get("/roles/list", rolesController.listRoles)
    }
}

module.exports = RolesRoutes