const permissionsController = require('../controllers/permissions.controllers')
const jwtMiddleware = require('../middlewares/jwt.middlewares')
const acl = require('../middlewares/permissions')

class PermissionRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post('/permissions/register', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('register_permissions'),
            permissionsController.registerPermission
        ),

        this.routes.get('/permissions/list', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('list_permissions'), 
            permissionsController.listPermissions
        ),

        this.routes.put('/permissions/edit', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('edit_permissions'), 
            permissionsController.editPermission
        ),

        this.routes.delete('/permissions/delete', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('delete_permissions'), 
            permissionsController.deletePermission
        )
    }
}

module.exports = PermissionRoutes