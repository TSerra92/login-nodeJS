const rolesController = require('../controllers/roles.controllers')
const jwtMiddleware = require('../middlewares/jwt.middlewares')
const acl = require('../middlewares/permissions')

class RolesRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post('/roles/register', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('register_roles'), 
            rolesController.registerRole
        ),

        this.routes.get('/roles/list', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('list_roles'),  
            rolesController.listRoles
        ),

        this.routes.put('/roles/edit', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('edit_roles'), 
            rolesController.editRole
        ),

        this.routes.delete('/roles/delete', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('delete_roles'), 
            rolesController.deleteRole
        ),

        this.routes.post('/roles/permissions', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('register_roles_permissions'),
            rolesController.registerRolesPermissions
        )
    }
}

module.exports = RolesRoutes